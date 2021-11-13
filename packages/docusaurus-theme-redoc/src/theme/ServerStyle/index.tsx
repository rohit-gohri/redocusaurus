/**
 * @see https://github.com/facebook/docusaurus/issues/3236#issuecomment-788953743
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter, useLocation } from 'react-router-dom';
import DocusaurusContext from '@docusaurus/context';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Props {
  from: React.Component;
}

const ServerStyle: React.FC<Props> = ({ from: children }) => {
  let style: any = null;

  const location = useLocation();
  const context = useDocusaurusContext();
  const sheet = new ServerStyleSheet();

  try {
    renderToString(
      sheet.collectStyles(
        <StaticRouter location={location}>
          <DocusaurusContext.Provider>{children}</DocusaurusContext.Provider>
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
};

function ClientStyle() {
  return null;
}

export default typeof window === 'undefined' ? ServerStyle : ClientStyle;
