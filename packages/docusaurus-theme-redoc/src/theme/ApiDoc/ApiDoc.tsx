import React from "react";
import Layout, {Props as LayoutProps } from "@theme/Layout";
import Redoc from "@theme/Redoc";

interface Spec {
  type: "url" | "object";
  content: any;
}

function ApiDoc(props: {
  layoutProps?: LayoutProps;
  spec: Spec;
}) {
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
