/**
 * @see https://github.com/facebook/docusaurus/issues/3236#issuecomment-788953743
 */
import React from 'react';
// @ts-ignore
import {Context as DocusaurusContext} from '@docusaurus/docusaurusContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StaticRouter, useLocation } from 'react-router-dom';

interface Props {
  from: React.Component;
}

const ServerStyle: React.FC<Props> = ({ from: children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let style: any = null;

  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
