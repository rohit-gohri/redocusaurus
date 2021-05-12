declare module '@theme/Redoc' {
  export type Props = {
    spec?: Record<string, unknown>;
    specUrl?: string;
  };
  const Redoc: (props: Props) => JSX.Element;
  export default Redoc;
}

declare module '@theme/ApiDoc' {
  import { Props as LayoutProps } from '@theme/Layout';

  type Spec =
    | {
        type: 'url';
        content: string;
      }
    | {
        type: 'object';
        content: Record<string, unknown>;
      };

  export type Props = {
    layoutProps?: Omit<LayoutProps, 'children'>;
    spec: Spec;
  };

  const ApiDoc: (props: Props) => JSX.Element;
  export default ApiDoc;
}
