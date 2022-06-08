import React from 'react';
import '../../global';
import type { AppStore, RedocRawOptions } from 'redoc';

/**
 * Don't hydrate/replace server styles
 * @see https://github.com/facebook/react/issues/10923#issuecomment-338715787
 */
export function ServerStyles(_props: {
  store: AppStore,
  lightThemeOptions: RedocRawOptions,
  darkThemeOptions: RedocRawOptions,
}) {
  return <div className="redocusaurus-styles"></div>;
}
