import React from 'react';
import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import { SchemaDefinition } from 'redoc';
import { ApiSchemaProps as Props, Spec } from '../../types/common';
import '../Redoc/styles.css';
import './styles.css';
import { useSpec } from '../../hooks/useSpec';

const ApiSchema: React.FC<Props> = ({
  id,
  example,
  pointer,
  ...rest
}: Props): JSX.Element => {
  const allData = useAllPluginInstancesData<Spec>('docusaurus-plugin-redoc');
  const { specUrl, content } =
    allData[id as string] || Object.values(allData)[0];

  const { store, options } = useSpec(content, specUrl);

  return (
    <ThemeProvider theme={options.theme}>
      <div
        className={clsx([
          'redocusaurus',
          'redocusaurus-schema',
          example ? null : 'hide-example',
        ])}
      >
        <SchemaDefinition
          parser={store.spec.parser}
          options={store.options}
          schemaRef={pointer}
          {...rest}
        />
      </div>
    </ThemeProvider>
  );
};

ApiSchema.defaultProps = {
  example: false,
};

export default ApiSchema;
