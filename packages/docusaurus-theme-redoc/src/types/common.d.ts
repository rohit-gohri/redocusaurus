import type { Props as LayoutProps } from '@theme/Layout';
import type { RedocRawOptions, ObjectDescriptionProps } from 'redoc';

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[] // eslint-disable-next-line @typescript-eslint/ban-types
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export interface SpecProps {
  spec: Record<string, unknown>;
  specUrl?: string;
}

export type RedocProps = SpecProps;

export type ApiSchemaProps = Omit<
  ObjectDescriptionProps,
  'parser' | 'options' | 'schemaRef'
> & {
  /**
   * If you have multiple apis, then add a `id` field in the specs array
   * And pass the same here
   */
  id?: string;
  pointer: ObjectDescriptionProps['schemaRef'];
  /**
   * Show the example or not
   */
  example?: boolean;
};

export type Spec = {
  specUrl?: string;
  content: Record<string, unknown>;
};

export type ApiDocProps = {
  layoutProps?: Omit<LayoutProps, 'children'>;
  spec: Spec;
};

export type RedocThemeOverrides = RecursivePartial<
  NonNullable<RedocRawOptions['theme']>
>;

export interface ThemeOptions {
  primaryColor?: string;
  redocTheme?: Partial<RedocRawOptions['theme']>;
  redocOptions?: Partial<Omit<RedocRawOptions, 'theme'>>;
}

export type GlobalData = {
  redocOptions: NonNullable<ThemeOptions['redocOptions']>;
  darkTheme: Partial<RedocRawOptions['theme']>;
  lightTheme: Partial<RedocRawOptions['theme']>;
};
