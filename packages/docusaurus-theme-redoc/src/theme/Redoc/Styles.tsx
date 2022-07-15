import React from 'react';
import withHydrationOnDemand from 'react-hydration-on-demand';
import '../../global';
import type { RedocRawOptions } from 'redoc';

/**
 * Don't hydrate/replace server styles
 * @see https://github.com/facebook/react/issues/10923#issuecomment-338715787
 */
function ServerStylesComponent(_props: {
  specProps: SpecProps;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
}) {
  return <div className="redocusaurus-styles"></div>;
}

export const ServerStyles = withHydrationOnDemand()(ServerStylesComponent);
