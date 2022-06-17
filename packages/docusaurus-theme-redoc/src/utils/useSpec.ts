import { useMemo, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
import merge from 'lodash/merge';
import '../global';
import { AppStore, RedocRawOptions } from 'redoc';
import { SpecProps } from '../types/common';
import { GlobalData } from '../types/options';

// the current store singleton in the app's instance
let currentStore: AppStore | null = null;

/**
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
export function useSpec(
  { spec, url, themeId }: SpecProps,
  optionsOverrides?: RedocRawOptions,
) {
  const fullUrl = useBaseUrl(url, { absolute: true });
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === 'dark';
  const themeOptions = usePluginData(
    'docusaurus-theme-redoc',
    themeId,
  ) as GlobalData;

  const result = useMemo(() => {
    const { lightTheme, darkTheme, options: redocOptions } = themeOptions;

    const commonOptions: Partial<RedocRawOptions> = {
      // Disable offset when server rendering and set to selector
      scrollYOffset:
        !isBrowser && typeof redocOptions.scrollYOffset === 'string'
          ? 0
          : redocOptions.scrollYOffset,
    };

    const lightThemeOptions: RedocRawOptions = merge(
      {
        ...redocOptions,
        ...commonOptions,
        theme: lightTheme,
      },
      optionsOverrides,
    );

    const darkThemeOptions: RedocRawOptions = merge(
      {
        ...redocOptions,
        ...commonOptions,
        theme: darkTheme,
      },
      optionsOverrides,
    );

    if (currentStore !== null && isBrowser) {
      currentStore.dispose();
    }

    currentStore = new AppStore(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      spec as any,
      fullUrl,
      isBrowser && isDarkTheme ? darkThemeOptions : lightThemeOptions,
    );

    return {
      darkThemeOptions,
      lightThemeOptions,
      // @ts-expect-error extra prop
      hasLogo: !!spec.info?.['x-logo'],
      store: currentStore,
    };
  }, [isBrowser, spec, fullUrl, isDarkTheme, themeOptions, optionsOverrides]);

  useEffect(() => {
    // to ensure that menu is properly loaded when theme gets changed
    // or when first load
    result.store.onDidMount();
  }, [result, isBrowser, isDarkTheme]);

  return result;
}
