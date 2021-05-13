import { Props as LayoutProps } from '@theme/Layout';
import { RedocRawOptions } from 'redoc';

export type RedocProps = {
  spec?: Record<string, unknown>;
  specUrl?: string;
};

export type Spec =
  | {
      type: 'url';
      content: string;
    }
  | {
      type: 'object';
      content: Record<string, unknown>;
    };

export type ApiDocProps = {
  layoutProps?: Omit<LayoutProps, 'children'>;
  spec: Spec;
};

export interface ThemeOptions {
  primaryColor?: string;
  redocOptions?: Partial<Omit<RedocRawOptions, 'theme'>>;
}

export type GlobalData = {
  redocOptions: NonNullable<ThemeOptions['redocOptions']>;
  baseTheme: {
    colors: {
      primary: {
        main: NonNullable<ThemeOptions['primaryColor']>;
      };
    };
  };
};
