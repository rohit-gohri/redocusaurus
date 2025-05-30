import React, { useEffect } from 'react';
import useSpecData from '@theme/useSpecData';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import '../../global';
import { Operation, OperationModel, Section } from 'redoc';
import { useSpec } from '../../utils/useSpec';
import type { ApiOperationProps } from '../../types/common';
import '../Redoc/styles.css';
import './styles.css';

const ApiOperation: React.FC<ApiOperationProps> = ({
  id,
  spec,
  example = false,
  pointer,
  ...rest
}: ApiOperationProps): JSX.Element => {
  const specProps = useSpecData(id, spec);
  const { store } = useSpec(specProps);

  // The # at the start is not included
  const operationPointer =
    pointer.charAt(0) === '#' ? pointer.substring(1) : pointer;

  // The menu contains a flattened list of spec items for easy searching
  const model = store.menu.flatItems.find(
    (item) =>
      item instanceof OperationModel && item.pointer === operationPointer,
  ) as OperationModel | undefined;

  if (!model) {
    throw new Error(`Failed to resolve reference "${pointer}"`);
  }

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
          'redocusaurus-operation',
          example ? null : 'hide-example',
        ])}
      >
        <Section id={model.id} $underlined={true}>
          <Operation operation={model} {...rest} />
        </Section>
      </div>
    </ThemeProvider>
  );
};

export default ApiOperation;
