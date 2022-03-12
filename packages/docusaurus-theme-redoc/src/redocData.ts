import merge from 'lodash/merge';
import { RedocRawOptions } from 'redoc';
import { GlobalData, RedocThemeOverrides } from './types/common';

const defaultOptions: Partial<RedocRawOptions> = {
  scrollYOffset: 'nav.navbar',
  expandSingleSchemaField: true,
  menuToggle: true,
  // @ts-expect-error not available in types
  suppressWarnings: true,
};

const getDefaultTheme = (
  primaryColor?: string,
  customTheme?: RedocThemeOverrides,
): RedocThemeOverrides => {
  return merge(
    {},
    {
      colors: {
        primary: {
          main: primaryColor || '#25c2a0',
        },
      },
    },
    customTheme,
  );
};

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
 * Theme override that is independant of Light/Black themes
 */
const COMMON_THEME: RedocThemeOverrides = {
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
  },
};

/**
 * NOTE: Variables taken from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
const LIGHT_THEME_OPTIONS: RedocThemeOverrides = {
  sidebar: {
    backgroundColor: '#ffffff',
  },
  rightPanel: {
    backgroundColor: DOCUSAURUS.darkGray,
  },
};

const DARK_THEME_OPTIONS: RedocThemeOverrides = {
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
  customTheme: RedocThemeOverrides,
  isDarkMode = false,
): RedocThemeOverrides {
  if (isDarkMode) {
    return merge({}, COMMON_THEME, DARK_THEME_OPTIONS, customTheme);
  } else {
    return merge({}, COMMON_THEME, LIGHT_THEME_OPTIONS, customTheme);
  }
}

export function getRedocThemes(customTheme: RedocThemeOverrides): {
  darkTheme: RedocThemeOverrides;
  lightTheme: RedocThemeOverrides;
} {
  return {
    lightTheme: getThemeOptions(customTheme, false),
    darkTheme: getThemeOptions(customTheme, true),
  };
}

export function getGlobalData(
  primaryColor?: string,
  customTheme?: RedocThemeOverrides,
  redocOptions?: Partial<RedocRawOptions>,
): GlobalData {
  const { lightTheme, darkTheme } = getRedocThemes(
    getDefaultTheme(primaryColor, customTheme),
  );

  return {
    lightTheme,
    darkTheme,
    redocOptions: {
      ...defaultOptions,
      ...redocOptions,
    },
  };
}
