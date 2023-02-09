import { Joi } from '@docusaurus/utils-validation';
import type { RawConfig } from '@redocly/openapi-core';

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

export interface PluginOptions {
  id?: string;
  spec: string;
  url?: string;
  route?: string;
  layout?: LayoutProps;
  debug?: boolean;
  themeId?: string;
  /**
   * Redocly config to bundle file
   * @see https://redocly.com/docs/cli/configuration/configuration-file/
   */
  config?: string | RawConfig;
}

export interface PluginOptionsWithDefault extends PluginOptions {
  debug: boolean;
}

export const DEFAULT_OPTIONS: Omit<PluginOptionsWithDefault, 'spec'> = {
  layout: {},
  debug: false,
};

export const PluginOptionSchema = Joi.object<PluginOptions>({
  id: Joi.string(),
  spec: Joi.string(),
  url: Joi.string().uri({ allowRelative: true }).optional(),
  layout: Joi.any().default(DEFAULT_OPTIONS.layout),
  debug: Joi.boolean().default(DEFAULT_OPTIONS.debug),
  route: Joi.string().uri({ relativeOnly: true }).optional(),
  config: Joi.any().optional(),
  themeId: Joi.string().optional(),
});
