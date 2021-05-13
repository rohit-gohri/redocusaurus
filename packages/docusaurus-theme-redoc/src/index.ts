import path from 'path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { ThemeOptions, GlobalData } from './types/common';

export default function redocTheme(
  context: LoadContext,
  options: ThemeOptions,
): Plugin<null> {
  return {
    name: 'docusaurus-theme-redoc',
    configureWebpack() {
      return {
        plugins: [new NodePolyfillPlugin({})],
      };
    },
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;
      // Create theme data global
      setGlobalData<GlobalData>({
        redocOptions: options.redocOptions || {},
        baseTheme: {
          colors: {
            primary: {
              main: options.primaryColor || '#25c2a0',
            },
          },
        },
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
