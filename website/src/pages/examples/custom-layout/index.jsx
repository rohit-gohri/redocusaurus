import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useApiData from '@theme/useApiData';

function CustomPage() {
  const specData = useApiData('using-custom-layout');
  return (
    <Layout title="Open API Docs" description="Open API Reference Docs for API">
      <Redoc specUrl={specData.specUrl} spec={specData.content} />
    </Layout>
  );
}

export default CustomPage;
