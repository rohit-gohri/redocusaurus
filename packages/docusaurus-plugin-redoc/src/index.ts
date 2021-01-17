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
          return JSON.stringify(parsedSpec);
        }
        return file.toString();
      }
      return null;
    },
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;

      if (content) {
        const specObj = await createData(
          `redocApiSpec-${options.id || '1'}.json`,
          content,
        );
        addRoute({
          path: options.routePath,
          component: options.apiDocComponent,
          modules: {
            spec: specObj,
          },
          exact: true,
        });
      }
      else if (options.specUrl) {
        addRoute({
          path: options.routePath,
          component: options.apiDocComponent,
          modules: {
            specUrl: options.specUrl,
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