import { useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
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
  const { isDarkTheme } = useColorMode();
  const themeOptions = usePluginData<GlobalData>('docusaurus-theme-redoc');

  const result = useMemo(() => {
    const { lightTheme, darkTheme, options: redocOptions } = themeOptions;

    const commonOptions: Partial<RedocRawOptions> = {
      // Disable offset when server rendering
      scrollYOffset: isBrowser ? redocOptions.scrollYOffset : 0,
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
      // @ts-expect-error extra prop
      hasLogo: !!spec.info?.['x-logo'],
      lightStore,
      darkStore,
      store: isBrowser && isDarkTheme ? darkStore : lightStore,
    };
  }, [isBrowser, spec, fullUrl, themeOptions, isDarkTheme]);

  return result;
}
