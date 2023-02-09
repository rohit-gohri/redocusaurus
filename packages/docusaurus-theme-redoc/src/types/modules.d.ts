interface SpecProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: import('redoc/typings/types').OpenAPISpec;
  url?: string;
  isSpecFile?: boolean;
  themeId?: string;
}

declare module '@theme/Redoc' {
  import type { RedocRawOptions } from 'redoc';
  const Redoc: (
    props: SpecProps & {
      className?: string;
      optionsOverrides?: RedocRawOptions;
    },
  ) => JSX.Element;
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
  interface ApiSchemaProps {
    /**
     * If you have multiple apis, then add a `id` field in the specs array
     * And pass the same here
     */
    id?: string;
    /**
     * Show the example or not
     */
    example?: boolean;

    /**
     * Ref to the schema
     */
    pointer: string;
  }

  const ApiSchema: (props: ApiSchemaProps) => JSX.Element;
  export default ApiSchema;
}

declare module '@theme/useSpecData' {
  /**
   * Load redocusaurus plugin data by ID
   */
  const useSpecData: (id?: string) => SpecProps;
  export default useSpecData;
}
