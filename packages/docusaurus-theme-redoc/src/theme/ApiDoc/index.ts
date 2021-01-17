import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';

function ApiDoc(props: {
  title?: string;
  description?: string;
  spec?: object,
  specUrl: string,
}) {
  return (
    <Layout
      title={props.title || 'API Docs'}
      description={props.description || 'Open API Reference Docs for the API'}
    >
      <Redoc spec={props.spec} specUrl={props.specUrl} />
    </Layout>
  );
}

export default ApiDoc;