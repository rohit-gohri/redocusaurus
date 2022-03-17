interface SpecProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: import('redoc/typings/types').OpenAPISpec;
  url?: string;
}

declare module '@theme/Redoc' {
  const Redoc: (props: SpecProps & { className?: string }) => JSX.Element;
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

declare module '@theme/useSpecData' {
  /**
   * Load redocusaurus plugin data by ID
   */
  const useSpecData: (id?: string) => SpecProps;
  export default useSpecData;
}
