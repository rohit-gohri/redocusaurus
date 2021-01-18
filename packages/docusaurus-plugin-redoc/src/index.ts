import fs from 'fs/promises';
import YAML from 'yaml';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
} from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import { ValidationError } from 'joi';

import { PluginOptionSchema, PluginOptions, DEFAULT_OPTIONS } from './options';

export {
  PluginOptions
};

export default function redocPlugin(
  context: LoadContext,
  opts: PluginOptions,
): Plugin<string | null, typeof PluginOptionSchema> {
  const options: PluginOptions = {...DEFAULT_OPTIONS, ...opts};
  const { baseUrl } = context.siteConfig;
  const { debug, spec, specUrl } = options;

  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      if (spec) {
        const file = await fs.readFile(spec);

        if (spec.endsWith('.yaml') || spec.endsWith('.yml')) {
          const parsedSpec = YAML.parse(spec);
          return parsedSpec;
        }
        return JSON.parse(file.toString());
      }
      return null;
    },
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      let spec;

      if (content) {
        spec = await createData(
          `redocApiSpec-${options.id || '1'}.json`,
          JSON.stringify({ type: 'object', content }),
        );
      }
      else if (specUrl) {
        spec = await createData(
          `redocApiSpec-${options.id || '1'}.json`,
          JSON.stringify({ type: 'url', content: specUrl }),
        );
      }
      else {
        console.error('[Redocusaurus] No spec provided');
        if (debug) {
          console.error('[PLUGIN_REDOC] Opts Input:', opts);
          console.error('[PLUGIN_REDOC] Options:', options);
          console.error('[PLUGIN_REDOC] Content:', content);
        }
        return;
      }
      const path = options.routePath.startsWith('/') ? options.routePath.slice(1) : options.routePath;
      const routeOptions = {
        path: normalizeUrl([baseUrl, path]),
        component: options.apiDocComponent,
        modules: {
          spec,
        },
        exact: true,
      };

      if (debug) {
        console.error("[PLUGIN_REDOC] Route:", routeOptions);
      }
      addRoute(routeOptions);
    },
  };
};

export async function validateOptions({
  validate,
  options,
}: OptionValidationContext<PluginOptions, ValidationError>): Promise<void> {
  await PluginOptionSchema.validateAsync(options);
}