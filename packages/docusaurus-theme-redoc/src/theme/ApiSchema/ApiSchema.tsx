import React, { useMemo } from 'react';
import {
  usePluginData,
  useAllPluginInstancesData,
} from '@docusaurus/useGlobalData';
import useThemeContext from '@theme/hooks/useThemeContext';
import { ThemeProvider } from 'styled-components';
import { SchemaDefinition, AppStore } from 'redoc';
import { ApiSchemaProps as Props, GlobalData, Spec } from '../../types/common';
import '../Redoc/styles.css';

function ApiSchema({ id, ...rest }: Props): JSX.Element {
  const { isDarkTheme } = useThemeContext();
  const allData = useAllPluginInstancesData<Spec>('docusaurus-plugin-redoc');
  const { lightTheme, darkTheme, redocOptions } = usePluginData<GlobalData>(
    'docusaurus-theme-redoc',
  );
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const { specUrl, content, type } =
    allData[id as string] ||
    Object.values(allData).filter(
      ({ type: dataType }) => dataType === 'object',
    )?.[0];

  const store = useMemo(() => {
    if (type !== 'object' || !content) {
      console.warn(
        { allData },
        '[Redocusaurus] ApiSchems needs a spec file to render',
      );
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new AppStore(content as any, specUrl, {
      ...redocOptions,
      theme,
    });
  }, [content, type, specUrl, redocOptions, theme]);

  if (!store) {
    // @ts-expect-error fix return type
    return null;
  }

  return (
    <ThemeProvider theme={store.options.theme}>
      <div className="redocusaurus redocusaurus-schema">
        <SchemaDefinition
          parser={store.spec.parser}
          options={store.options}
          {...rest}
        />
      </div>
    </ThemeProvider>
  );
}

export default ApiSchema;
