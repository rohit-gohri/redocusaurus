import React from "react";
import ApiDoc from "@theme/ApiDoc";
import useBaseUrl from "@docusaurus/useBaseUrl";

const STATIC_SPEC = "/openapi-page.yaml";

function CustomPage() {
  return (
    <ApiDoc
      layoutProps={{
        title: "Open API Docs",
        description: `Open API Reference Docs for API`,
      }}
      spec={{
        type: "url",
        content: useBaseUrl(STATIC_SPEC),
      }}
    />
  );
}

export default CustomPage;
