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
 * (c) 2023 Rohit Gohri
 * Released under the MIT License
 */
function ServerRedoc(
  props: SpecProps & {
    className?: string;
    optionsOverrides?: RedocRawOptions;
  },
): JSX.Element {
  const { className, optionsOverrides, ...specProps } = props;
  const { store, darkThemeOptions, lightThemeOptions, hasLogo } = useSpec(
    specProps,
    optionsOverrides,
  );

  return (
    <>
      <ServerStyles
        specProps={specProps}
        lightThemeOptions={lightThemeOptions}
        darkThemeOptions={darkThemeOptions}
      />
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

export default ServerRedoc;
