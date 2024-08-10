import React from 'react';
import clsx from 'clsx';
import '../../global';
import { Redoc as RedocComponent } from 'redoc';
import useSpec from '@theme/useSpec';
import { ServerStyles } from './Styles';
import './styles.css';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
function ServerRedoc(props: RedocProps): JSX.Element {
  const { className, optionsOverrides, url, id, themeId } = props;
  const { store, spec, darkThemeOptions, lightThemeOptions, hasLogo } = useSpec(
    {
      spec: props.spec,
      themeId,
      id,
    },
    optionsOverrides,
  );

  return (
    <>
      <ServerStyles
        spec={spec}
        url={url}
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
