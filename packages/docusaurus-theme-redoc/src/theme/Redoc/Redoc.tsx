import React from 'react';
import useSpecData from '@theme/useSpecData';
import clsx from 'clsx';
import '../../global';
import { RedocStandalone } from 'redoc';
import type { RedocProps } from '../../types/common';
import { useSpecOptions } from '../../utils/useSpecOptions';
import './styles.css';
import ServerRedoc from './ServerRedoc';

const isDevMode = process.env.NODE_ENV === 'development';

/*!
 * Redocusaurus
 * https://redocusaurus.vercel.app/
 * (c) 2025 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(initProps: RedocProps): JSX.Element {
  // eslint-disable-next-line react/destructuring-assignment
  const specProps = useSpecData(initProps.id, initProps.spec);
  const finalProps = {
    ...specProps,
    ...initProps,
  };

  const {
    spec,
    className,
    isSpecFile = spec != null,
    url,
    themeId,
    optionsOverrides,
  } = finalProps;
  const { options } = useSpecOptions(themeId, optionsOverrides);

  const enableServerRendering = spec != null && (!isDevMode || isSpecFile);

  if (enableServerRendering) {
    return <ServerRedoc {...finalProps} spec={spec} />;
  }

  return (
    <div className={clsx(['redocusaurus', className])}>
      <RedocStandalone specUrl={url} options={options} />
    </div>
  );
}

export default Redoc;
