import React from 'react';
import ApiDoc from '@theme/ApiDoc';

const STATIC_SPEC = '/openapi-page.yaml';

function CustomPage() {

  return (
    <ApiDoc
      title={`Open API Docs`}
      description={`Open API Reference Docs for API`}
      spec={{
        type: 'url',
        content: STATIC_SPEC,
      }}
    />
  );
}

export default CustomPage;
