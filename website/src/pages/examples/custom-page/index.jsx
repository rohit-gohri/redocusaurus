import React from 'react';
import ApiDoc from '@theme/ApiDoc';
import useSpecData from '@theme/useSpecData';

function CustomPage() {
  const specData = useSpecData('using-single-yaml');

  return (
    <ApiDoc
      layoutProps={{
        title: `Custom page for : ${specData.spec.info?.title}`,
        description: 'Example showcasing custom page',
      }}
      specProps={specData}
    />
  );
}

export default CustomPage;
