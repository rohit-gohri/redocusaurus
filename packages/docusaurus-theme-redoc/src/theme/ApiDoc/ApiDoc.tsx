import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import { ApiDocProps as Props } from '../../types/common';

function ApiDoc({ layoutProps, spec }: Props): JSX.Element {
  const {
    title = 'API Docs',
    description = 'Open API Reference Docs for the API',
  } = layoutProps || {};

  return (
    <Layout {...layoutProps} title={title} description={description}>
      <Redoc spec={spec.content} specUrl={spec.specUrl} />
    </Layout>
  );
}

export default ApiDoc;
