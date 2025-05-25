import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import '../../global';
import { SchemaDefinition } from 'redoc';
import useSpec from '../useSpec';
import '../Redoc/styles.css';
import './styles.css';

const ApiSchema: React.FC<ApiSchemaProps> = ({
  example,
  pointer,
  id,
  themeId,
  spec,
  optionsOverrides,
  ...schemaProps
}: ApiSchemaProps): JSX.Element => {
  const { store } = useSpec(
    {
      id,
      themeId,
      spec,
    },
    optionsOverrides,
  );

  useEffect(() => {
    /**
     * @see https://github.com/Redocly/redoc/blob/823be24b313c3a2445df7e0801a0cc79c20bacd1/src/services/MenuStore.ts#L273-L276
     */
    store.menu.dispose();
  }, [store]);

  return (
    <ThemeProvider theme={store.options.theme}>
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
          showExample={example}
          {...schemaProps}
        />
      </div>
    </ThemeProvider>
  );
};

ApiSchema.defaultProps = {
  example: false,
};

export default ApiSchema;
