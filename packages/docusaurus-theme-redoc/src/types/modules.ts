interface SpecProps {
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
   * Public path to the spec file used, used by Redoc as download url
   */
  downloadSpecUrl?: string;
  /**
   * Option to disable normalization of spec download URLs
   */
  normalizeUrl?: boolean;
}
interface SpecResult {
  hasLogo: boolean;
  spec: import('redoc/typings/types').OpenAPISpec;
  store: import('redoc/typings').AppStore;
  options: import('redoc/typings').RedocRawOptions;
  darkThemeOptions: import('redoc/typings').RedocRawOptions;
  lightThemeOptions: import('redoc/typings').RedocRawOptions;
}

type RedocProps = SpecProps & {
  className?: string;
  optionsOverrides?: import('redoc/typings').RedocRawOptions;
  /**
   * External URL to load spec file from
   */
  url?: string;
};

type ApiSchemaProps = Omit<
  import('redoc/typings').ObjectDescriptionProps,
  'parser' | 'options' | 'schemaRef'
> &
  SpecProps & {
    /**
     * Ref to the schema
     */
    pointer: import('redoc/typings').ObjectDescriptionProps['schemaRef'];
    optionsOverrides?: import('redoc/typings').RedocRawOptions;
  };

declare module '@theme/Redoc' {
  const Redoc: (props: RedocProps) => JSX.Element;
  export default Redoc;
}

declare module '@theme/ApiDoc' {
  import { Props as LayoutProps } from '@theme/Layout';

  interface ApiDocProps {
    /**
     * Get this by using `@theme/useSpecData` hook
     */
    specProps: SpecProps;
    /**
     * Title/Description for layout is by default loaded from the API spec
     */
    layoutProps?: Omit<LayoutProps, 'children'>;
  }

  const ApiDoc: (props: ApiDocProps) => JSX.Element;
  export default ApiDoc;
}

declare module '@theme/ApiDocMdx' {
  interface MdxProps {
    /**
     * If you have multiple apis, then add a `id` field in the specs array
     * And pass the same here
     */
    id?: string;
  }

  const ApiDocMdx: (props: MdxProps) => JSX.Element;
  export default ApiDocMdx;
}

declare module '@theme/ApiSchema' {
  const ApiSchema: (props: ApiSchemaProps) => JSX.Element;
  export default ApiSchema;
}

declare module '@theme/useSpecData' {
  type SpecDataResult = Omit<SpecProps, 'id'>;

  /**
   * Load redocusaurus plugin data by ID
   */
  const useSpecData: (
    id?: string,
    spec?: import('redoc/typings/types').OpenAPISpec,
    themeId?: string,
  ) => SpecDataResult;
  export default useSpecData;
}

declare module '@theme/useSpec' {
  import { RedocRawOptions } from 'redoc';
  /**
   * Load redocusaurus plugin data by ID
   */
  const useSpec: (
    specInfo: SpecProps,
    optionsOverrides?: RedocRawOptions,
  ) => SpecResult;

  export default useSpec;
}

declare module '@theme/useSpecOptions' {
  import { RedocRawOptions } from 'redoc';
  interface SpecOptionsResultProps {
    options: RedocRawOptions;
    darkThemeOptions: RedocRawOptions;
    lightThemeOptions: RedocRawOptions;
  }
  /**
   * Load redocusaurus plugin data by ID
   */
  const useSpec: (
    themeId: SpecProps['themeId'],
    optionsOverrides?: RedocRawOptions,
  ) => SpecOptionsResultProps;

  export default useSpec;
}
