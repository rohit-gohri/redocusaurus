import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps } from 'redoc';

export type ParsedSpec = Record<string, unknown>;

export interface SpecProps {
  spec: ParsedSpec;
  url?: string;
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

export type ApiDocProps = {
  specProps: SpecProps;
  layoutProps?: Omit<LayoutProps, 'children'>;
};
