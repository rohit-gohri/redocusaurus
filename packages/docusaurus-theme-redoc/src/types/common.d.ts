import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps } from 'redoc';
import type { OpenAPISpec } from 'redoc/typings/types';

export type ParsedSpec = OpenAPISpec;

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
