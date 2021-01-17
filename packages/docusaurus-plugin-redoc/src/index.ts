import path from 'path';
import fs from 'fs/promises';
import YAML from 'yaml';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
} from '@docusaurus/types';
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

  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      const { spec } = options;
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

      if (content) {
        const spec = await createData(
          `redocApiSpec-${options.id || '1'}.json`,
          JSON.stringify({ type: 'object', content }),
        );
        addRoute({
          path: options.routePath,
          component: options.apiDocComponent,
          modules: {
            spec,
          },
          exact: true,
        });
      }
      else if (options.specUrl) {
        const spec = await createData(
          `redocApiSpec-${options.id || '1'}.json`,
          JSON.stringify({ type: 'url', content: options.specUrl }),
        );
        addRoute({
          path: options.routePath,
          component: options.apiDocComponent,
          modules: {
            spec,
          },
          exact: true,
        });
      }
      else {
        console.error('[Redocusaurus] No spec provided');
      }
    },
  };
};

export async function validateOptions({
  validate,
  options,
}: OptionValidationContext<PluginOptions, ValidationError>): Promise<void> {
  await PluginOptionSchema.validateAsync(options);
}