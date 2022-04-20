import { useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
import '../global';
import { AppStore, RedocRawOptions } from 'redoc';
import { SpecProps } from '../types/common';
import { GlobalData } from '../types/options';

/**
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
export function useSpec({ spec, url }: SpecProps) {
  const fullUrl = useBaseUrl(url);
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === "dark";
  const themeOptions = usePluginData<GlobalData>('docusaurus-theme-redoc');

  const stores = useMemo(() => {
    const { lightTheme, darkTheme, options: redocOptions } = themeOptions;

    const commonOptions: Partial<RedocRawOptions> = {
      // Disable offset when server rendering and set to selector
      scrollYOffset:
        !isBrowser && typeof redocOptions.scrollYOffset === 'string'
          ? 0
          : redocOptions.scrollYOffset,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lightStore = new AppStore(spec as any, fullUrl, {
      ...redocOptions,
      ...commonOptions,
      theme: lightTheme,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const darkStore = new AppStore(spec as any, fullUrl, {
      ...redocOptions,
      ...commonOptions,
      theme: darkTheme,
    });

    return {
      lightStore,
      darkStore,
    };
  }, [isBrowser, spec, fullUrl, themeOptions]);

  const result = useMemo(() => {
    return {
      ...stores,
      // @ts-expect-error extra prop
      hasLogo: !!spec.info?.['x-logo'],
      store: isBrowser && isDarkTheme ? stores.darkStore : stores.lightStore,
    };
  }, [isBrowser, isDarkTheme, spec, stores]);

  return result;
}
