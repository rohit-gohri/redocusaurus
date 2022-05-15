import React from 'react';
import clsx from 'clsx';
import '../../global';
import { Redoc as RedocComponent, RedocRawOptions } from 'redoc';
import { SpecProps } from '../../types/common';
import { useSpec } from '../../utils/useSpec';
import { ServerStyles } from './Styles';
import './styles.css';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(
  props: SpecProps & {
    className?: string;
    optionsOverrides?: RedocRawOptions;
  },
): JSX.Element {
  const { className, optionsOverrides, ...specProps } = props;
  const { store, darkStore, lightStore, hasLogo } = useSpec(
    specProps,
    optionsOverrides,
  );

  return (
    <>
      <ServerStyles lightStore={lightStore} darkStore={darkStore} />
      <div
        className={clsx([
          'redocusaurus',
          hasLogo && 'redocusaurus-has-logo',
          className,
        ])}
      >
        <RedocComponent store={store} />
      </div>
    </>
  );
}

export default Redoc;
