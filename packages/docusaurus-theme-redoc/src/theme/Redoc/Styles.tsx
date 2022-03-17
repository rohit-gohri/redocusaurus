import React from 'react';
import '../../global';
import type { AppStore } from 'redoc';

/**
 * Don't hydrate/replace server styles
 * @see https://github.com/facebook/react/issues/10923#issuecomment-338715787
 */
export function ServerStyles(_props: {
  lightStore: AppStore;
  darkStore: AppStore;
}) {
  return <div className="redocusaurus-styles"></div>;
}
