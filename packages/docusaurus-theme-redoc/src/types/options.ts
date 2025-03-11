import type { RedocRawOptions, RedocProps } from 'redoc';

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[] // eslint-disable-next-line @typescript-eslint/ban-types
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export type RedocThemeOverrides = RecursivePartial<
  NonNullable<RedocRawOptions['theme']>
>;

export interface ThemeOptions {
  id?: string;
  /**
   * Primary Color to pass to Redoc Theme,
   * ideally this should be all the customization you need
   */
  primaryColor?: string;
  /**
   * Primary Color to pass to Redoc Theme in dark mode.
   * This option is only needed if you want a different primary color in dark
   * mode, and will default to `primaryColor` if not set.
   */
  primaryColorDark?: string;
  /**
   * Options to pass to redoc
   * @deprecated
   * @see https://github.com/redocly/redoc#redoc-options-object
   */
  options?: string | Partial<Omit<RedocRawOptions, 'theme'>>;
  /**
   * Options to pass to override RedocThemeObject if you
   * want to customize the theme yourself.
   * **NOTE:** This will overwrite the dark/light mode fixes added in `redocusaurus`
   * @deprecated
   * @see https://github.com/Redocly/redoc#redoc-theme-object
   */
  theme?: Partial<RedocRawOptions['theme']>;
}

export type GlobalData = {
  options: RedocProps['store']['rawOptions'];
  darkTheme: Partial<RedocRawOptions['theme']>;
  lightTheme: Partial<RedocRawOptions['theme']>;
};
