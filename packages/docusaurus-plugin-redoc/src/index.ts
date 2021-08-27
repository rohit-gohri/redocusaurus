import fs from 'fs';
import path from 'path';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
} from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import YAML from 'yaml';

import {
  PluginOptionSchema,
  PluginOptions,
  PluginOptionsWithDefault,
  DEFAULT_OPTIONS,
} from './options';

export { PluginOptions };

export default function redocPlugin(
  context: LoadContext,
  opts: PluginOptions,
): Plugin<Record<string, unknown> | null> {
  const { baseUrl } = context.siteConfig;
  const options: PluginOptionsWithDefault = { ...DEFAULT_OPTIONS, ...opts };
  const { debug, spec, specUrl } = options;
  if (debug) {
    console.error('[REDOCUSAURUS_PLUGIN] Opts Input:', opts);
    console.error('[REDOCUSAURUS_PLUGIN] Options:', options);
  }
  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      let content: Record<string, unknown> | null = null;
      if (spec) {
        const file = fs.readFileSync(spec).toString();

        if (spec.endsWith('.yaml') || spec.endsWith('.yml')) {
          const parsedSpec = YAML.parse(file);
          content = parsedSpec;
        } else content = JSON.parse(file);
      }
      if (debug) {
        console.error('[REDOCUSAURUS_PLUGIN] Content:', content);
      }
      return content;
    },
    getPathsToWatch() {
      if (!spec) {
        return [];
      }
      const contentPath = path.resolve(context.siteDir, spec);
      return [contentPath];
    },
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      if (!content && !specUrl) {
        console.error('[Redocusaurus] No spec provided');
        return;
      }
      const specData = await createData(
        `redocApiSpec-${options.id || '1'}.json`,
        JSON.stringify({
          specUrl,
          type: content ? 'object' : 'url',
          content: content || specUrl,
        }),
      );
      const layoutData = await createData(
        `redocApiLayout-${options.id || '1'}.json`,
        JSON.stringify(options.layout),
      );

      const routePath = options.routePath.startsWith('/')
        ? options.routePath.slice(1)
        : options.routePath;
      const routeOptions = {
        path: normalizeUrl([baseUrl, routePath]),
        component: options.apiDocComponent,
        modules: {
          spec: specData,
          layoutProps: layoutData,
        },
        exact: true,
      };

      if (debug) {
        console.error('[REDOCUSAURUS_PLUGIN] Route:', routeOptions);
      }
      addRoute(routeOptions);
    },
  };
}

export function validateOptions({
  options,
}: OptionValidationContext<PluginOptions>): Promise<void> {
  const { value, error } = PluginOptionSchema.validate(options);
  if (error) {
    throw error;
  }
  return value;
}
