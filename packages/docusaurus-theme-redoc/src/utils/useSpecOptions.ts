import { useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {
  usePluginData,
  useAllPluginInstancesData,
} from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
import merge from 'lodash/merge';
import '../global';
import { RedocRawOptions } from 'redoc';
import { SpecProps } from '../types/common';
import { GlobalData } from '../types/options';

/**
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2023 Rohit Gohri
 * Released under the MIT License
 */
export function useSpecOptions(
  themeId: SpecProps['themeId'] = 'theme-redoc',
  optionsOverrides?: RedocRawOptions,
) {
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === 'dark';

  const defaultThemeOptions = useAllPluginInstancesData(
    'docusaurus-theme-redoc',
    {
      failfast: true,
    },
  );
  const themeOptions =
    (usePluginData('docusaurus-theme-redoc', themeId) as GlobalData) ||
    Object.values(defaultThemeOptions)[0];

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

    const options =
      isBrowser && isDarkTheme ? darkThemeOptions : lightThemeOptions;

    return {
      options,
      darkThemeOptions,
      lightThemeOptions,
    };
  }, [isBrowser, isDarkTheme, themeOptions, optionsOverrides]);

  return result;
}
