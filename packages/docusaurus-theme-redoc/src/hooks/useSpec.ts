import { useMemo } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
import { AppStore } from 'redoc';
import { GlobalData, SpecProps } from '../types/common';

/**
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
export function useSpec(spec: SpecProps['spec'], specUrl?: string) {
  const { isDarkTheme } = useColorMode();
  const themeOptions = usePluginData<GlobalData>('docusaurus-theme-redoc');

  const result = useMemo(() => {
    const { lightTheme, darkTheme, redocOptions } = themeOptions;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const options = {
      ...redocOptions,
      theme,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = new AppStore(spec as any, specUrl, options);

    return {
      store,
      options,
    };
  }, [spec, specUrl, themeOptions, isDarkTheme]);

  return result;
}
