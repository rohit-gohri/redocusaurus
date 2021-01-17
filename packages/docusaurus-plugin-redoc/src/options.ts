import * as Joi from 'joi';

export interface PluginOptions {
  id?: string;
  spec?: string;
  specUrl: string;
  routePath: string;
  apiDocComponent: string;
};

export const DEFAULT_OPTIONS: PluginOptions = {
  specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
  routePath: '/api/', // URL Route.
  apiDocComponent: '@theme/ApiDoc',
};

export const PluginOptionSchema = Joi.object({
  id: Joi.string(),
  spec: Joi.string(),
  specUrl: Joi.string().uri().default(DEFAULT_OPTIONS.specUrl),
  routePath: Joi.string().default(DEFAULT_OPTIONS.routePath),
  apiDocComponent: Joi.string().default(DEFAULT_OPTIONS.apiDocComponent),
});