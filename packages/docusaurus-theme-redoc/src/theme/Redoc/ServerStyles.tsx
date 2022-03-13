import React from 'react';
import { AppStore, Redoc } from 'redoc';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export function ServerStyles({ store }: { store: AppStore }) {
  const sheet = new ServerStyleSheet();
  renderToString(sheet.collectStyles(React.createElement(Redoc, { store })));
  const css = sheet.getStyleTags();

  return (
    <div
      className="redocusaurus-styles"
      dangerouslySetInnerHTML={{
        __html: css,
      }}
    />
  );
}
