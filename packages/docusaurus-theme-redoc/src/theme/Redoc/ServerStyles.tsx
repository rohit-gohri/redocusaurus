import React from 'react';
import '../../global';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AppStore, Redoc, RedocRawOptions } from 'redoc';
import type { OpenAPISpec } from 'redoc/typings/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import postcss from 'postcss';
import prefixer from 'postcss-prefix-selector';

const prefixCssSelectors = function (css: string, className: string): string {
  const processor = postcss().use(
    prefixer({
      prefix: className,
    }),
  );

  return processor.process(css).css;
};

const renderCss = function (store: AppStore): string {
  const styleSheet = new ServerStyleSheet();

  renderToString(
    styleSheet.collectStyles(React.createElement(Redoc, { store })),
  );

  return String(styleSheet.instance);
};

const LIGHT_MODE_PREFIX = "html:not([data-theme='dark'])";
const DARK_MODE_PREFIX = "html([data-theme='dark'])";

export type ServerStylesProps = {
  spec: OpenAPISpec;
  url?: string;
  normalizeUrl?: boolean;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
};

export function ServerStyles({
  spec,
  url,
  normalizeUrl,
  lightThemeOptions,
  darkThemeOptions,
}: ServerStylesProps) {
  const absoluteUrl = useBaseUrl(url, { absolute: true });
  const fullUrl = normalizeUrl ? absoluteUrl : url;

  const lightCss = prefixCssSelectors(
    renderCss(new AppStore(spec, fullUrl, lightThemeOptions)),
    LIGHT_MODE_PREFIX,
  );

  const darkCss = prefixCssSelectors(
    renderCss(new AppStore(spec, fullUrl, darkThemeOptions)),
    DARK_MODE_PREFIX,
  );

  return (
    <div className="redocusaurus-styles">
      <style
        key="light-mode-styles"
        dangerouslySetInnerHTML={{ __html: lightCss }}
      />
      <style
        key="dark-mode-styles"
        dangerouslySetInnerHTML={{ __html: darkCss }}
      />
    </div>
  );
}
