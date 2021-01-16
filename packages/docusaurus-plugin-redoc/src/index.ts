import path from 'path';
import fs from 'fs/promises';
import type {
  LoadContext,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from '@docusaurus/types';
import {ValidationError} from 'joi';

import { PluginOptionSchema, PluginOptions } from './options';

export default function redocPlugin(
  context: LoadContext,
  options: PluginOptions,
): Plugin<string | null, typeof PluginOptionSchema> {

  return {
    name: 'docusaurus-plugin-redoc',
    async loadContent() {
      const {spec, specUrl} = options;
      if (spec) {
        const file = await fs.readFile(spec);
        return file.toString();
      }
      return null;
    },
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;

      let specObj;

      if (content) {
        specObj = await createData(
          'redocApiSpec.json',
          content,
        );
        addRoute({
          path: options.routePath,
          component: options.redocComponent,
          modules: {
            spec: specObj,
          },
          exact: true,
        });
      }
      else {
        addRoute({
          path: options.routePath,
          component: options.redocComponent,
          modules: {
            specUrl: options.specUrl,
          },
          exact: true,
        });
      }
    },
  };
};

export function validateOptions({
  validate,
  options,
}: OptionValidationContext<PluginOptions, ValidationError>): ValidationResult<
  PluginOptions,
  ValidationError
> {
  const validatedOptions = validate(PluginOptionSchema, options);
  return validatedOptions;
}