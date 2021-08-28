import * as Joi from 'joi';

type LayoutProps = {
  title?: string;
  noFooter?: boolean;
  description?: string;
  image?: string;
  keywords?: string[];
  permalink?: string;
  wrapperClassName?: string;
  searchMetadatas?: {
    version?: string;
    tag?: string;
  };
};

export type Spec = {
  specUrl?: string;
} & (
  | {
      type: 'url';
      content: string;
    }
  | {
      type: 'object';
      content: Record<string, unknown>;
    }
);

export interface PluginOptions {
  id?: string;
  spec?: string;
  specUrl?: string;
  layout?: LayoutProps;
  debug?: boolean;
  routePath?: string;
  apiDocComponent?: string;
}

export interface PluginOptionsWithDefault extends PluginOptions {
  debug: boolean;
  routePath: string;
  apiDocComponent: string;
}

export const DEFAULT_OPTIONS: PluginOptionsWithDefault = {
  layout: {},
  debug: false,
  routePath: '/api/', // URL Route.
  apiDocComponent: '@theme/ApiDoc',
};

export const PluginOptionSchema = Joi.object({
  id: Joi.string(),
  spec: Joi.string(),
  specUrl: Joi.string().uri({ allowRelative: true }),
  layout: Joi.any().default(DEFAULT_OPTIONS.layout),
  debug: Joi.boolean().default(DEFAULT_OPTIONS.debug),
  routePath: Joi.string().default(DEFAULT_OPTIONS.routePath),
  apiDocComponent: Joi.string().default(DEFAULT_OPTIONS.apiDocComponent),
});
