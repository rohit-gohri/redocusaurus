import fs from 'fs';
import YAML from 'yaml';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
} from '@docusaurus/types';
import { normalizeUrl } from '@docusaurus/utils';
import { ValidationError } from 'joi';

import { PluginOptionSchema, PluginOptions, PluginOptionsWithDefault, DEFAULT_OPTIONS } from './options';

export {
  PluginOptions
};

export default function redocPlugin(
  context: LoadContext,
  opts: PluginOptions,
): Plugin<string | null> {
  const { baseUrl } = context.siteConfig;
  const options: PluginOptionsWithDefault = {...DEFAULT_OPTIONS, ...opts};
  const { debug, spec, specUrl } = options;
  if (debug) {
    console.error('[REDOCUSAURUS_PLUGIN] Opts Input:', opts);
    console.error('[REDOCUSAURUS_PLUGIN] Options:', options);
  }
  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      let content: any = null;
      if (spec) {
        const file = fs.readFileSync(spec).toString();

        if (spec.endsWith('.yaml') || spec.endsWith('.yml')) {
          const parsedSpec = YAML.parse(file);
          content = parsedSpec;
        }
        else content = JSON.parse(file);
      }
      if (debug) {
        console.error('[REDOCUSAURUS_PLUGIN] Content:', content);
      }
      return content;
    },
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      if (!content && !specUrl) {
        console.error('[Redocusaurus] No spec provided');
        return;
      }
      const specData = await createData(
        `redocApiSpec-${options.id || '1'}.json`,
        JSON.stringify({ type: content ? 'object' : 'url', content: content || specUrl }),
      );
      const layoutData = await createData(
        `redocApiLayout-${options.id || '1'}.json`,
        JSON.stringify(options.layout),
      );

      const path = options.routePath.startsWith('/') ? options.routePath.slice(1) : options.routePath;
      const routeOptions = {
        path: normalizeUrl([baseUrl, path]),
        component: options.apiDocComponent,
        modules: {
          spec: specData,
          layoutProps: layoutData,
        },
        exact: true,
      };

      if (debug) {
        console.error("[REDOCUSAURUS_PLUGIN] Route:", routeOptions);
      }
      addRoute(routeOptions);
    },
  };
};

export function validateOptions({
  options,
}: OptionValidationContext<PluginOptions>): Promise<void> {
  const {value, error} = PluginOptionSchema.validate(options);
  if (error) {
    throw error;
  }
  return value;
}