import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';

const STATIC_SPEC = '/openapi-component.yaml';

function CustomPage() {
  return (
  <Layout
    title={`Open API Docs`}
    description={`Open API Reference Docs for API`}
  >
    <Redoc
      specUrl={STATIC_SPEC}
    ></Redoc>
  </Layout>
  );
}

export default CustomPage;
