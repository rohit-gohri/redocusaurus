import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps } from 'redoc';
import type { OpenAPISpec } from 'redoc/typings/types';

export type ParsedSpec = OpenAPISpec;

export interface SpecDataResult {
  /**
   * Spec to use, already loaded previously
   */
  spec: ParsedSpec;
  /**
   * Public path to the spec file used, used by Redoc as download url
   */
  url: string;
  /**
   * Theme instance to use
   */
  themeId: string;
}

export interface SpecProps extends Partial<SpecDataResult> {
  /**
   * When spec not provided, load the spec from docusaurus config
   * fallback to first configuration if not provided
   */
  id?: string;
  /**
   * Spec to use, already loaded previously
   */
  spec: ParsedSpec;
  /**
   * Option to disable normalization of spec download URLs
   */
  normalizeUrl?: boolean;
  /**
   * @deprecated
   */
  isSpecFile?: boolean;
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
