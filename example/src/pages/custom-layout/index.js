import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useBaseUrl from '@docusaurus/useBaseUrl';

const STATIC_SPEC = '/openapi-component.yaml';

function CustomPage() {
  return (
    <Layout
      title={`Open API Docs`}
      description={`Open API Reference Docs for API`}
    >
      <Redoc
        specUrl={useBaseUrl(STATIC_SPEC)}
      ></Redoc>
    </Layout>
  );
}

export default CustomPage;
