import type { Props as LayoutProps } from '@theme/Layout';
import type { RedocRawOptions, ObjectDescriptionProps } from 'redoc';
import type { RecursivePartial } from './util';

export type RedocProps = {
  spec?: Record<string, unknown>;
  specUrl?: string;
};

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
} & (
  | {
      type: 'url';
      content: string;
    }
  | {
      type: 'object';
      content: Record<string, unknown>;
    }
);

export type ApiDocProps = {
  layoutProps?: Omit<LayoutProps, 'children'>;
  spec: Spec;
};

export type RedocThemeOverrides = RecursivePartial<
  NonNullable<RedocRawOptions['theme']>
>;

export interface ThemeOptions {
  primaryColor?: string;
  redocOptions?: Partial<Omit<RedocRawOptions, 'theme'>>;
}

export type GlobalData = {
  redocOptions: NonNullable<ThemeOptions['redocOptions']>;
  darkTheme: Partial<RedocRawOptions['theme']>;
  lightTheme: Partial<RedocRawOptions['theme']>;
};
