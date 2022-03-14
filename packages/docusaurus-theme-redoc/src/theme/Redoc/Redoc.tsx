import React from 'react';
import clsx from 'clsx';
import { Redoc as RedocComponent } from 'redoc';
import { SpecProps } from '../../types/common';
import { useSpec } from '../../hooks/useSpec';
import { ServerStyles } from './Styles';
import './styles.css';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props: SpecProps): JSX.Element {
  const { store, hasLogo } = useSpec(props);

  return (
    <>
      <ServerStyles store={store} />
      <div
        className={clsx(['redocusaurus', hasLogo && 'redocusaurus-has-logo'])}
      >
        <RedocComponent store={store} />
      </div>
    </>
  );
}

export default Redoc;
