import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import type { Props } from '@theme/ApiDoc';

function ApiDoc({ layoutProps, spec: propSpec }: Props): JSX.Element {
  const {
    title = 'API Docs',
    description = 'Open API Reference Docs for the API',
  } = layoutProps || {};

  const spec: Record<string, unknown> | undefined =
    propSpec.type === 'object' ? propSpec.content : undefined;
  const specUrl: string | undefined =
    propSpec.type === 'url' ? propSpec.content : undefined;

  return (
    <Layout {...layoutProps} title={title} description={description}>
      <Redoc spec={spec} specUrl={specUrl} />
    </Layout>
  );
}

export default ApiDoc;
