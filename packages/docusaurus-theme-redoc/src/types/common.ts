import type { Props as LayoutProps } from '@theme/Layout';
import type { ObjectDescriptionProps, RedocRawOptions } from 'redoc';
import type { OpenAPISpec } from 'redoc/typings/types';

export type ParsedSpec = OpenAPISpec;

export interface SpecProps {
  /**
   * Spec to use, already loaded previously
   */
  spec: ParsedSpec;
  /**
   * When spec not provided, load the spec from docusaurus config
   * fallback to first configuration if not provided
   */
  id?: string;
  /**
   * docusaurus theme to use
   */
  themeId?: string;
}

export type SpecPropsWithUrl = Omit<SpecProps, 'id'> & {
  /**
   * Absolute path to the spec file used
   */
  url?: string;
};

export type RedocProps = SpecProps & {
  /**
   * FIXME - incorrect name - should be isExternalUrl
   */
  isSpecFile?: boolean;
  className?: string;
  optionsOverrides?: RedocRawOptions;
  /**
   * External URL to load spec file from
   * FIXME - incorrect name - should be externalUrl
   */
  url?: string;
};

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
     * Ref to the schema
     */
    pointer: ObjectDescriptionProps['schemaRef'];
    spec: ParsedSpec;
  };

export type ApiDocProps = {
  specProps: SpecProps;
  layoutProps?: Omit<LayoutProps, 'children'>;
};
