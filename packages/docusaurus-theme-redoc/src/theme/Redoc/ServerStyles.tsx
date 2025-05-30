import React from 'react';
import '../../global';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AppStore, Redoc, RedocRawOptions } from 'redoc';
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
  specProps: SpecProps;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
};

export function ServerStyles({
  specProps,
  lightThemeOptions,
  darkThemeOptions,
}: ServerStylesProps) {
  const absoluteUrl = useBaseUrl(specProps.url, { absolute: true });
  const fullUrl = specProps.normalizeUrl ? absoluteUrl : specProps.url;

  const lightCss = prefixCssSelectors(
    renderCss(new AppStore(specProps.spec, fullUrl, lightThemeOptions)),
    LIGHT_MODE_PREFIX,
  );

  const darkCss = prefixCssSelectors(
    renderCss(new AppStore(specProps.spec, fullUrl, darkThemeOptions)),
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
