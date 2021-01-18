import * as Joi from 'joi';

export interface PluginOptions {
  id?: string;
  debug?: boolean;
  spec?: string;
  specUrl?: string;
  routePath?: string;
  apiDocComponent?: string;
};

export interface PluginOptionsWithDefault extends PluginOptions {
  debug: boolean;
  routePath: string;
  apiDocComponent: string;
};

export const DEFAULT_OPTIONS: PluginOptionsWithDefault = {
  debug: false,
  routePath: '/api/', // URL Route.
  apiDocComponent: '@theme/ApiDoc',
};

export const PluginOptionSchema = Joi.object({
  id: Joi.string(),
  spec: Joi.string(),
  specUrl: Joi.string().uri(),
  debug: Joi.boolean().default(DEFAULT_OPTIONS.debug),
  routePath: Joi.string().default(DEFAULT_OPTIONS.routePath),
  apiDocComponent: Joi.string().default(DEFAULT_OPTIONS.apiDocComponent),
});