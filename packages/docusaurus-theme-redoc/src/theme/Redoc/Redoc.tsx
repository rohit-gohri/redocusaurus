import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import useThemeContext from '@theme/hooks/useThemeContext';
import { RedocStandalone } from 'redoc';
import { RedocProps as Props, GlobalData } from '../../types/common';
import './styles.css';

function Redoc(props: Props): JSX.Element {
  const { isDarkTheme } = useThemeContext();
  const {
    lightTheme,
    darkTheme,
    redocOptions = null,
  } = usePluginData<GlobalData>('docusaurus-theme-redoc');
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { spec, specUrl } = props;

  return (
    <div className="redocusaurus">
      <RedocStandalone
        spec={spec}
        specUrl={specUrl}
        options={{
          scrollYOffset: 'nav.navbar',
          hideDownloadButton: true,
          expandSingleSchemaField: true,
          menuToggle: true,
          // @ts-expect-error not in types
          suppressWarnings: true,
          ...redocOptions,
          theme,
        }}
      />
    </div>
  );
}

export default Redoc;
