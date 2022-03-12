import type { RedocRawOptions } from 'redoc';

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
  /**
   * Primary Color to pass to Redoc Theme,
   * ideally this should be all the customization you need
   */
  primaryColor?: string;
  /**
   * Options to pass to redoc
   * @see https://github.com/redocly/redoc#redoc-options-object
   */
  options?: Partial<Omit<RedocRawOptions, 'theme'>>;
  /**
   * Options to pass to override RedocThemeObject if you
   * want to customize the theme yourself.
   * **NOTE:** This will overwrite the dark/light mode fixes added in `redocusaurus`
   * @see https://github.com/Redocly/redoc#redoc-theme-object
   */
  theme?: Partial<RedocRawOptions['theme']>;
}

export type GlobalData = {
  options: NonNullable<ThemeOptions['redocOptions']>;
  darkTheme: Partial<RedocRawOptions['theme']>;
  lightTheme: Partial<RedocRawOptions['theme']>;
};
