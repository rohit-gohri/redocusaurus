import type { LoadContext } from '@docusaurus/types';
import type { PluginOptions } from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';

export interface PresetOptions {
  id?: string;
  debug?: boolean;
  specs: PluginOptions[];
  theme?: ThemeOptions;
}

export type PresetEntry = ['redocusaurus', PresetOptions];

export default function preset(
  context: LoadContext,
  opts: PresetOptions = {
    specs: [],
    theme: {},
  },
) {
  let specsArray: PluginOptions[] = [];
  const { debug = false, specs, theme = {} } = opts;
  if (debug) {
    console.error('[REDOCUSAURUS] Options:', opts);
  }

  if (Array.isArray(specs)) {
    specsArray = specs;
  } else if (specs) {
    specsArray = [specs];
  }

  if (debug) {
    console.error('[REDOCUSAURUS] Specs:', specsArray);
  }
  const id = opts.id ? `-${opts.id}` : '';
  const themeId = `theme-redoc${id}`;

  const config = {
    themes: [
      [
        require.resolve('docusaurus-theme-redoc'),
        {
          id: themeId,
          ...theme,
        },
      ],
    ],
    plugins: [
      ...specsArray.map((pluginOpts, index) => [
        require.resolve('docusaurus-plugin-redoc'),
        {
          ...pluginOpts,
          themeId,
          id: pluginOpts.id || `plugin-redoc${id}-${index}`,
          debug,
        },
      ]),
    ],
  };

  if (debug) {
    console.error('[REDOCUSAURUS] Final:', JSON.stringify(config, null, 2));
  }

  return config;
}
