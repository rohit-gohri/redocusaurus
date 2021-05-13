import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import useThemeContext from '@theme/hooks/useThemeContext';
import { RedocStandalone, ResolvedThemeInterface } from 'redoc';
import merge from 'lodash/merge';
import { RedocProps as Props, GlobalData } from '../../types/common';
import './styles.css';

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[] // eslint-disable-next-line @typescript-eslint/ban-types
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

type ThemeOverrides = RecursivePartial<ResolvedThemeInterface>;

/**
 * TODO: Update colors from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
const DOCUSAURUS = {
  darkGray: '#303846',
  dark: {
    primaryText: '#f5f6f7',
    secondaryText: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgb(24, 25, 26)',
  },
};

/**
 * NOTE: Variables taken from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
const LIGHT_THEME_OPTIONS: ThemeOverrides = {
  typography: {
    fontFamily: 'var(--ifm-font-family-base)',
    fontSize: 'var(--ifm-font-size-base)',
    lineHeight: 'var(--ifm-line-height-base)',
    fontWeightLight: 'var(--ifm-font-weight-light)',
    fontWeightRegular: 'var(--ifm-font-weight-base)',
    fontWeightBold: 'var(--ifm-font-weight-bold)',
    headings: {
      fontFamily: 'var(--ifm-font-family-base)',
      fontWeight: 'var(--ifm-font-weight-semibold)',
      lineHeight: 'var(--ifm-line-height-base)',
    },
    code: {
      fontFamily: 'var(--ifm-font-family-monospace)',
      lineHeight: 'var(--ifm-pre-line-height)',
    },
  },
  sidebar: {
    /**
     * about the same as the sidebar in the docs area, for consistency
     * @see https://davidgoss.co/blog/api-documentation-redoc-docusaurus/
     */
    width: '300px',
    backgroundColor: '#ffffff',
  },
  rightPanel: {
    backgroundColor: DOCUSAURUS.darkGray,
  },
};

const DARK_THEME_OPTIONS: ThemeOverrides = {
  colors: {
    text: {
      primary: DOCUSAURUS.dark.primaryText,
      secondary: DOCUSAURUS.dark.secondaryText,
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
    },
    border: {
      dark: '#ffffff',
      light: 'rgba(0,0,0, 0.1)',
    },
  },
  schema: {
    nestedBackground: DOCUSAURUS.dark.backgroundColor,
    typeNameColor: DOCUSAURUS.dark.secondaryText,
    typeTitleColor: DOCUSAURUS.dark.secondaryText,
  },
  sidebar: {
    backgroundColor: DOCUSAURUS.dark.backgroundColor,
    textColor: DOCUSAURUS.dark.primaryText,
    arrow: {
      color: DOCUSAURUS.dark.primaryText,
    },
  },
};

function getThemeOptions(
  baseTheme: ThemeOverrides,
  isDarkMode: boolean,
): ThemeOverrides {
  const mergedTheme = merge({}, baseTheme, LIGHT_THEME_OPTIONS);

  if (!isDarkMode) return mergedTheme;

  return merge({}, baseTheme, LIGHT_THEME_OPTIONS, DARK_THEME_OPTIONS);
}

function Redoc(props: Props): JSX.Element {
  const { isDarkTheme } = useThemeContext();
  const { baseTheme, redocOptions = null } = usePluginData<GlobalData>(
    'docusaurus-theme-redoc',
  );
  const theme = React.useMemo(() => getThemeOptions(baseTheme, isDarkTheme), [
    baseTheme,
    isDarkTheme,
  ]);
  const { spec, specUrl } = props;

  return (
    <div className="redocusaurus">
      <RedocStandalone
        {...(spec ? { spec } : { specUrl })}
        options={{
          scrollYOffset: 'nav.navbar',
          hideDownloadButton: true,
          expandSingleSchemaField: true,
          menuToggle: true,
          // @ts-expect-error
          suppressWarnings: true,
          ...redocOptions,
          theme,
        }}
      />
    </div>
  );
}

export default Redoc;
