import { useMemo } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useColorMode } from '@docusaurus/theme-common';
import { AppStore } from 'redoc';
import { RedocProps, GlobalData } from '../../types/common';

/*!
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2021 Rohit Gohri
 * Released under the MIT License
 */
const useRedocHook = (props: RedocProps) => {
  const { isDarkTheme } = useColorMode();
  const { lightTheme, darkTheme, redocOptions } = usePluginData<GlobalData>(
    'docusaurus-theme-redoc',
  );
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { spec, specUrl, fullscreenWithSidebar } = props;
  const store = useMemo(() => {
    if (!spec) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new AppStore(spec as any, specUrl, {
      ...redocOptions,
      theme,
    });
  }, [spec, specUrl, redocOptions, theme]);
  const classNames = ['redocusaurus'];
  if (fullscreenWithSidebar) {
    classNames.push('redocusaurus-fullscreen-with-sidebar');
  }
  const wrapperClassName = classNames.join(' ')

  return { wrapperClassName, store, redocOptions, theme };
};

export default useRedocHook;
