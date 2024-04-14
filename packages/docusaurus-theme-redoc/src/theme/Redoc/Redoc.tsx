import React from 'react';
import clsx from 'clsx';
import '../../global';
import { RedocStandalone } from 'redoc';
import useSpecOptions from '@theme/useSpecOptions';
import './styles.css';
import ServerRedoc from './ServerRedoc';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2024 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props: RedocProps): JSX.Element {
  const { className, optionsOverrides, url, themeId } = props;
  const { options } = useSpecOptions(themeId, optionsOverrides);

  if (url) {
    return (
      <div className={clsx(['redocusaurus', className])}>
        <RedocStandalone specUrl={url} options={options} />
      </div>
    );
  }

  return <ServerRedoc {...props} />;
}

export default Redoc;
