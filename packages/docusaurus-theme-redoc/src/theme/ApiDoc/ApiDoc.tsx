import React from "react";
import Layout from "@theme/Layout";
import Redoc from "@theme/Redoc";
import type { Props } from "@theme/ApiDoc";

function ApiDoc(props: Props) {
  const { type, content } = props.spec;
  const {
    title = "API Docs",
    description = "Open API Reference Docs for the API",
  } = props.layoutProps || {};

  let spec;
  let specUrl;
  if (type === "url") {
    specUrl = content;
  } else spec = content;

  return (
    <Layout {...props.layoutProps} title={title} description={description}>
      <Redoc spec={spec} specUrl={specUrl} />
    </Layout>
  );
}

export default ApiDoc;
