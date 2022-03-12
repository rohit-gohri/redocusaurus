import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import { ApiDocProps as Props } from '../../types/common';

function ApiDoc({ layoutProps, specProps }: Props): JSX.Element {
  const defaultTitle = specProps.spec?.info?.title || 'API Docs';
  const defaultDescription =
    specProps.spec?.info?.description || 'Open API Reference Docs for the API';

  return (
    <Layout
      title={defaultTitle}
      description={defaultDescription}
      {...layoutProps}
    >
      <Redoc {...specProps} />
    </Layout>
  );
}

export default ApiDoc;
