import React from 'react';
import { Redoc as RedocComponent, RedocStandalone } from 'redoc';
import { RedocProps } from '../../types/common';
import useRedocHook from './RedocHook';
import './styles.css';

/*!
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2021 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props: RedocProps): JSX.Element {
  const { spec, specUrl } = props;
  const { wrapperClassName, store, redocOptions, theme } = useRedocHook(props);
  return (
    <div className={wrapperClassName}>
      {store ? (
        <RedocComponent store={store} />
      ) : (
        <RedocStandalone
          spec={spec}
          specUrl={specUrl}
          options={{
            ...redocOptions,
            theme,
          }}
        />
      )}
    </div>
  );
}

export default Redoc;
