import { Props as LayoutProps } from '@theme/Layout';
import { RedocRawOptions } from 'redoc';
import { RecursivePartial } from './util';

export type RedocProps = {
  spec?: Record<string, unknown>;
  specUrl?: string;
};

export type Spec = {
  specUrl: string;
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
