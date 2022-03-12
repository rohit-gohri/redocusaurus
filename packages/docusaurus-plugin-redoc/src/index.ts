import fs from 'fs';
import path from 'path';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
} from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import YAML from 'yaml';
import { loadAndBundleSpec } from 'redoc';

import {
  PluginOptionSchema,
  PluginOptions,
  PluginOptionsWithDefault,
  DEFAULT_OPTIONS,
} from './options';
import { ParsedSpec, SpecProps, ApiDocProps } from './types/common';

export { PluginOptions };

export default function redocPlugin(
  context: LoadContext,
  opts: PluginOptions,
): Plugin<Record<string, unknown>> {
  const { baseUrl } = context.siteConfig;
  const options: PluginOptionsWithDefault = { ...DEFAULT_OPTIONS, ...opts };
  const { debug, spec, url: downloadUrl } = options;
  let url = downloadUrl;
  if (debug) {
    console.error('[REDOCUSAURUS_PLUGIN] Opts Input:', opts);
    console.error('[REDOCUSAURUS_PLUGIN] Options:', options);
  }
  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      let parsedSpec: ParsedSpec | null = null;
      // If local file
      if (fs.existsSync(spec)) {
        if (debug) {
          console.log('[REDOCUSAURUS_PLUGIN] reading file: ', spec);
        }

        const file = fs.readFileSync(spec).toString();

        if (spec.endsWith('.yaml') || spec.endsWith('.yml')) {
          parsedSpec = YAML.parse(file);
        } else parsedSpec = JSON.parse(file);
      } else {
        // If spec is a remote url then add it as download url
        url = spec;
      }

      if (debug) {
        console.log('[REDOCUSAURUS_PLUGIN] bundling spec');
      }
      const content = await loadAndBundleSpec(parsedSpec || spec!);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return content as any;
    },
    getPathsToWatch() {
      if (!spec) {
        return [];
      }
      const contentPath = path.resolve(context.siteDir, spec);
      return [contentPath];
    },
    async contentLoaded({ content, actions }) {
      const { createData, addRoute, setGlobalData } = actions;
      if (!content) {
        throw new Error(`[Redocusaurus] Spec could not be parsed: ${spec}`);
      }

      const data: SpecProps = {
        url,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        spec: content as any,
      };
      setGlobalData(data);

      if (options.route) {
        const specProps = await createData(
          `redocApiSpecV1-${options.id || '1'}.json`,
          JSON.stringify(data),
        );
        const layoutProps = await createData(
          `redocApiLayoutV1-${options.id || '1'}.json`,
          JSON.stringify(options.layout),
        );
        const routePath = options.route.startsWith('/')
          ? options.route.slice(1)
          : options.route;

        const modules: Record<keyof ApiDocProps, string> = {
          specProps,
          layoutProps,
        };

        const routeOptions = {
          modules,
          component: '@theme/ApiDoc',
          exact: true,
          path: normalizeUrl([baseUrl, routePath]),
        };

        if (debug) {
          console.error('[REDOCUSAURUS_PLUGIN] Route:', routeOptions);
        }
        addRoute(routeOptions);
      }
    },
  };
}

export function validateOptions({
  options,
}: OptionValidationContext<PluginOptions>): void {
  const { error } = PluginOptionSchema.validate(options);
  if (error) {
    throw error;
  }
}
