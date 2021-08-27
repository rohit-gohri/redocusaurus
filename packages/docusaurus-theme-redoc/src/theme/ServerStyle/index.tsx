/* eslint-disable import/no-extraneous-dependencies */
/**
 * @see https://github.com/facebook/docusaurus/issues/3236#issuecomment-788953743
 */
import React from 'react';
import DocusaurusContext from '@docusaurus/docusaurusContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter, useLocation } from 'react-router-dom';

function ServerStyle({ from: children }: { from: React.Component }) {
  let style = null;

  const location = useLocation();
  const context = useDocusaurusContext();
  const sheet = new ServerStyleSheet();

  try {
    renderToString(
      sheet.collectStyles(
        <StaticRouter location={location}>
          <DocusaurusContext.Provider value={context}>
            {children}
          </DocusaurusContext.Provider>
        </StaticRouter>,
      ),
    );
    style = sheet.getStyleElement();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return style;
}

function ClientStyle() {
  return null;
}

export default typeof window === 'undefined' ? ServerStyle : ClientStyle;
