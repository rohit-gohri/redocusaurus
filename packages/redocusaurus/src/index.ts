import path from 'path';
import type { LoadContext } from '@docusaurus/types';
import { Globby, createSlugger } from '@docusaurus/utils';
import type { PluginOptions } from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';
import type { PresetEntry, PresetOptions, SpecOptions } from './types';

export type { PresetEntry, PresetOptions };

const DEFAULT_OPENAPI_OPTIONS = {
  path: 'openapi',
  routeBasePath: '/api',
} satisfies NonNullable<PresetOptions['openapi']>;

export default async function preset(
  context: LoadContext,
  opts: PresetOptions = {
    theme: {},
  },
) {
  const { debug = false, openapi, specs, theme = {}, config } = opts;
  if (debug) {
    console.error('[REDOCUSAURUS] Options:', opts);
  }

  const id = opts.id ? `-${opts.id}` : '';
  const themeId = `theme-redoc${id}`;
  if (debug) {
    console.error('[REDOCUSAURUS] ID Suffix:', id);
  }

  const specsArray: SpecOptions[] = [];

  if (specs) {
    if (debug) {
      console.error('[REDOCUSAURUS] Specs Files:', specs);
    }
    specsArray.push(...(Array.isArray(specs) ? specs : [specs]));
  }
  if (!specs || openapi) {
    // Load folder if no specs provided or folder specifically provided
    const { path: folder, routeBasePath } = {
      ...DEFAULT_OPENAPI_OPTIONS,
      ...openapi,
    };

    const resolvedFolder = path.resolve(folder);
    if (debug) {
      console.error('[REDOCUSAURUS] Loading Folder:', {
        folder,
        resolvedFolder,
      });
    }

    const specFiles = await Globby([
      `${folder}/**/*.openapi.{yaml,json}`,
      `${folder}/**/openapi.{yaml,json}`,
    ]);
    if (debug) {
      console.error('[REDOCUSAURUS] Found openapi files:', specFiles);
    }

    const slugger = createSlugger();
    const baseRoute = routeBasePath.replace(/\/*$/, '');
    specsArray.push(
      ...specFiles.map((specFile): SpecOptions => {
        const spec = path.resolve(specFile);
        const fileRoute = path
          .relative(resolvedFolder, spec)
          .replace(/(\/index)?\.openapi\.(yaml|json)$/, '')
          .replace(/\/*$/, '');

        const docRoute = `${baseRoute}/${fileRoute}`;
        return {
          id: slugger.slug(fileRoute),
          spec: spec,
          route: docRoute,
        };
      }),
    );
  }

  if (debug) {
    console.error('[REDOCUSAURUS] All specs:', specsArray);
  }
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
