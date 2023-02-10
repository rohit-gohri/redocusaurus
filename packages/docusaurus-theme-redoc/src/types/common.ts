import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps } from 'redoc';
import type { OpenAPISpec } from 'redoc/typings/types';

export type ParsedSpec = OpenAPISpec;

export interface SpecProps {
  spec: ParsedSpec;
  url?: string;
  isSpecFile?: boolean;
  themeId?: string;
}

export type RedocProps = SpecProps;

export interface MdxProps {
  /**
   * If you have multiple apis, then add a `id` field in the specs array
   * And pass the same here
   */
  id?: string;
}

export type ApiSchemaProps = Omit<
  ObjectDescriptionProps,
  'parser' | 'options' | 'schemaRef'
> &
  MdxProps & {
    /**
     * Show the example or not
     */
    example?: boolean;
    /**
     * Ref to the schema
     */
    pointer: ObjectDescriptionProps['schemaRef'];
  };

export type ApiDocProps = {
  specProps: SpecProps;
  layoutProps?: Omit<LayoutProps, 'children'>;
};
