import { useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
  const { isDarkTheme } = useColorMode();
  const themeOptions = usePluginData<GlobalData>('docusaurus-theme-redoc');

  const result = useMemo(() => {
    const { lightTheme, darkTheme, options: redocOptions } = themeOptions;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const options: RedocRawOptions = {
      ...redocOptions,
      theme,
      // Disable offset when server rendering
      scrollYOffset:
        typeof window === 'undefined' ? 0 : redocOptions.scrollYOffset,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = new AppStore(spec as any, fullUrl, options);

    return {
      store,
      options,
    };
  }, [spec, fullUrl, themeOptions, isDarkTheme]);

  return result;
}
