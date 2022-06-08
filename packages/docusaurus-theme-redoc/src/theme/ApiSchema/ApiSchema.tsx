import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import '../../global';
import { SchemaDefinition } from 'redoc';
import { useSpec } from '../../utils/useSpec';
import { useSpecData } from '../useSpecData';
import { ApiSchemaProps as Props } from '../../types/common';
import '../Redoc/styles.css';
import './styles.css';

const ApiSchema: React.FC<Props> = ({
  id,
  example,
  pointer,
  ...rest
}: Props): JSX.Element => {
  const specProps = useSpecData(id);
  const { store } = useSpec(specProps);

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
