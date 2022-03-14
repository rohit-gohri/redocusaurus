import React from 'react';
import type { AppStore } from 'redoc';
import { OnlyOnClient } from '../../utils/OnlyOnClient';

/**
 * Don't hydrate/replace server styles
 * @see https://github.com/facebook/react/issues/10923#issuecomment-338715787
 */
export function ServerStyles(_props: {
  lightStore: AppStore;
  darkStore: AppStore;
}) {
  return (
    <div className="redocusaurus-styles">
      <OnlyOnClient
        key="light-mode-styles"
        html={`<style data-styled="true" data-styled-version="5.3.3"> test{} </style>`}
      />
      <OnlyOnClient
        key="dark-mode-styles"
        html={`<style data-styled="true" data-styled-version="5.3.3"> test{} </style>`}
      />
    </div>
  );
}
