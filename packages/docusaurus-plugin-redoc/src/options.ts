import * as Joi from 'joi';

export interface PluginOptions {
  spec?: string;
  specUrl: string;
  routePath: string;
  redocComponent: string;
};

const DEFAULT_OPTIONS: PluginOptions = {
  specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
  routePath: '/api/', // URL Route.
  redocComponent: '@theme/Redoc',
};

export const PluginOptionSchema = Joi.object({
  spec: Joi.string(),
  specUrl: Joi.string().uri().default(DEFAULT_OPTIONS.specUrl),
  routePath: Joi.string().default(DEFAULT_OPTIONS.routePath),
  redocComponent: Joi.string().default(DEFAULT_OPTIONS.redocComponent),
});