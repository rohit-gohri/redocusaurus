import React, { useEffect } from 'react';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import '../../global';
import { Operation, OperationModel, Section } from 'redoc';
import { useSpec } from '../../utils/useSpec';
import { useSpecData } from '../useSpecData';
import type { ApiOperationProps as Props } from '../../types/common';
import '../Redoc/styles.css';
import './styles.css';

const ApiOperation: React.FC<Props> = ({
  id,
  example,
  pointer,
  ...rest
}: Props): JSX.Element => {
  const specProps = useSpecData(id);
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

ApiOperation.defaultProps = {
  example: false,
};

export default ApiOperation;
