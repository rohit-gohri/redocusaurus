import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';

interface Spec {
  type: 'url' | 'object',
  content: any,
};

function ApiDoc(props: {
  title?: string;
  description?: string;
  spec: Spec,
}) {
  const { type, content } = props.spec;
  let spec;
  let specUrl;
  if (type === 'url') {
    specUrl = content;
  }
  else spec = content;

  return (
    <Layout
      title={props.title || 'API Docs'}
      description={props.description || 'Open API Reference Docs for the API'}
    >
      <Redoc spec={spec} specUrl={specUrl} />
    </Layout>
  );
}

export default ApiDoc;