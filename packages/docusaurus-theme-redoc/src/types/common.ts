import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps } from 'redoc';

export interface SpecProps {
  /**
   * Spec to use, already loaded previously
   */
  spec: import('redoc/typings/types').OpenAPISpec;
  /**
   * When spec not provided, load the spec from docusaurus config
   * fallback to first configuration if not provided
   */
  id?: string;
  /**
   * docusaurus theme to use
   */
  themeId?: string;
  /**
   * Option to disable normalization of spec download URLs
   */
  normalizeUrl?: boolean;
  /**
   * Public path to the spec file used, used by Redoc as download url
   */
  downloadSpecUrl?: string;
}

export type SpecDataResult = Omit<SpecProps, 'id'>;

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

export type ApiOperationProps = MdxProps & {
  /**
   * Show the example or not
   */
  example?: boolean;

  /**
   * Ref to the operation
   */
  pointer: string;
};

export type ApiDocProps = {
  specProps: SpecProps;
  layoutProps?: Omit<LayoutProps, 'children'>;
};
