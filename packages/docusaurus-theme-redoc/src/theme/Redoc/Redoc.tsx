import React from 'react';
import { Redoc as RedocComponent } from 'redoc';
import { SpecProps } from '../../types/common';
import { useSpec } from '../../hooks/useSpec';
import './styles.css';

/*!
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2022 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props: SpecProps): JSX.Element {
  const { store } = useSpec(props);

  return (
    <div className="redocusaurus">
      <RedocComponent store={store} />
    </div>
  );
}

export default Redoc;
