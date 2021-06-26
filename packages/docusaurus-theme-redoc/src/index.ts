import path from 'path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { ThemeOptions, GlobalData } from './types/common';
import { getRedocThemes } from './redocTheme';

// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import webpack from 'webpack';

export { ThemeOptions, GlobalData };

export default function redocTheme(
  context: LoadContext,
  options: ThemeOptions,
): Plugin<null> {
  return {
    name: 'docusaurus-theme-redoc',
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            fs: false,
          },
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.versions.node': JSON.stringify(
              process.versions.node || '0.0.0',
            ),
          }),
          new NodePolyfillPlugin(),
        ],
      };
    },
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;
      // Create theme data global
      setGlobalData<GlobalData>({
        redocOptions: options.redocOptions || {},
        ...getRedocThemes({
          colors: {
            primary: {
              main: options.primaryColor || '#25c2a0',
            },
          },
        }),
      });
    },
    getThemePath() {
      return path.join(__dirname, '..', 'dist-jsx', 'theme');
    },
    getTypeScriptThemePath() {
      return path.join(__dirname, '..', 'src', 'theme');
    },
    getClientModules() {
      return [path.join(__dirname, 'custom.css')];
    },
  };
}

const getSwizzleComponentList = (): string[] => {
  return ['Redoc', 'ApiDoc'];
};

export { getSwizzleComponentList };
