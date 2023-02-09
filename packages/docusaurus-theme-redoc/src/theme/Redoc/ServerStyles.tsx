import React from 'react';
import '../../global';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { AppStore, Redoc, RedocRawOptions } from 'redoc';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

/**
 * @see https://stackoverflow.com/a/54077142
 */
const prefixCssSelectors = function (rules: string, className: string) {
  const classLen = className.length;
  let char, nextChar, isAt, isIn;

  // makes sure the className will not concatenate the selector
  className += ' ';

  // removes comments
  rules = rules.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');

  // makes sure nextChar will not target a space
  rules = rules.replace(/}(\s*)@/g, '}@');
  rules = rules.replace(/}(\s*)}/g, '}}');

  for (let i = 0; i < rules.length - 2; i++) {
    char = rules[i];
    nextChar = rules[i + 1];

    if (char === '@' && nextChar !== 'f') isAt = true;
    if (!isAt && char === '{') isIn = true;
    if (isIn && char === '}') isIn = false;

    if (
      !isIn &&
      nextChar !== '@' &&
      nextChar !== '}' &&
      (char === '}' || char === ',' || ((char === '{' || char === ';') && isAt))
    ) {
      rules = rules.slice(0, i + 1) + className + rules.slice(i + 1);
      i += classLen;
      isAt = false;
    }
  }

  // prefix the first select if it is not `@media` and if it is not yet prefixed
  if (rules.indexOf(className) !== 0 && rules.indexOf('@') !== 0)
    rules = className + rules;

  return rules;
};

const LIGHT_MODE_PREFIX = "html:not([data-theme='dark'])";
const DARK_MODE_PREFIX = "html([data-theme='dark'])";

export function ServerStyles({
  specProps,
  lightThemeOptions,
  darkThemeOptions,
}: {
  specProps: SpecProps;
  lightThemeOptions: RedocRawOptions;
  darkThemeOptions: RedocRawOptions;
}) {
  const fullUrl = useBaseUrl(specProps.url, { absolute: true });
  const css = {
    light: '',
    dark: '',
  };
  const lightSheet = new ServerStyleSheet();
  const lightStore = new AppStore(specProps.spec, fullUrl, lightThemeOptions);
  renderToString(
    lightSheet.collectStyles(React.createElement(Redoc, { store: lightStore })),
  );
  const lightStyleTag = lightSheet.getStyleTags();
  let lightCss = lightStyleTag.slice(lightStyleTag.indexOf('>') + 1);
  lightCss = lightCss.slice(0, lightCss.indexOf('<style'));
  css.light = prefixCssSelectors(lightCss, LIGHT_MODE_PREFIX);

  const darkSheet = new ServerStyleSheet();
  const darkStore = new AppStore(specProps.spec, fullUrl, darkThemeOptions);
  renderToString(
    darkSheet.collectStyles(React.createElement(Redoc, { store: darkStore })),
  );
  const darkStyleTag = darkSheet.getStyleTags();
  let darkCss = darkStyleTag.slice(darkStyleTag.indexOf('>') + 1);
  darkCss = darkCss.slice(0, darkCss.indexOf('<style'));
  css.dark = prefixCssSelectors(darkCss, DARK_MODE_PREFIX).slice(
    DARK_MODE_PREFIX.length + 1,
  );

  return (
    <div className="redocusaurus-styles">
      <style
        key="light-mode-styles"
        dangerouslySetInnerHTML={{ __html: css.light }}
      />
      <style
        key="dark-mode-styles"
        dangerouslySetInnerHTML={{ __html: css.dark }}
      />
    </div>
  );
}
