declare module "@theme/Redoc" {
  export type Props = {
    spec?: object,
    specUrl: string,
  };
  const Redoc: (props: Props) => JSX.Element;
  export default Redoc;
}

declare module "@theme/ApiDoc" {
  import {Props as LayoutProps } from "@theme/Layout";
  interface Spec {
    type: "url" | "object";
    content: any;
  }
  
  export type Props =  {
    layoutProps?: Omit<LayoutProps, 'children'>;
    spec: Spec;
  };

  const ApiDoc: (props: Props) => JSX.Element;
  export default ApiDoc;
}
