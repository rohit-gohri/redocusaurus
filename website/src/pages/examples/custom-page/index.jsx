import React from 'react';
import ApiDoc from '@theme/ApiDoc';
import useApiData from '@theme/useApiData';

function CustomPage() {
  const specData = useApiData('using-custom-layout');

  return (
    <ApiDoc
      layoutProps={{
        title: 'Open API Docs',
        description: `Open API Reference Docs for API`,
      }}
      spec={specData}
    />
  );
}

export default CustomPage;
