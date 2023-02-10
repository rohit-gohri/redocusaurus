import type { LoadContext } from '@docusaurus/types';
import type { PluginOptions } from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';

export interface PresetOptions {
  id?: string;
  debug?: boolean;
  /**
   * Path to the Redocly config file `redocly.yaml`
   */
  config?: string;
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
  const { debug = false, specs, theme = {}, config } = opts;
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

  const resolvedPreset: {
    themes: readonly (readonly [string, ThemeOptions])[];
    plugins: readonly (readonly [string, PluginOptions])[];
  } = {
    themes: [
      [
        require.resolve('docusaurus-theme-redoc'),
        {
          id: themeId,
          options: config,
          ...theme,
        },
      ],
    ],
    plugins: [
      ...specsArray.map(
        (pluginOpts, index) =>
          [
            require.resolve('docusaurus-plugin-redoc'),
            {
              config,
              ...pluginOpts,
              themeId,
              id: pluginOpts.id || `plugin-redoc${id}-${index}`,
              debug,
            },
          ] as const,
      ),
    ],
  } as const;

  if (debug) {
    console.error(
      '[REDOCUSAURUS] Final:',
      JSON.stringify(resolvedPreset, null, 2),
    );
  }

  return resolvedPreset;
}
