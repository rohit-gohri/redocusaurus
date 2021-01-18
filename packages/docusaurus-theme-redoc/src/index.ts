import path from 'path';
import webpack from 'webpack';
import type {
  LoadContext,
  Plugin,
} from '@docusaurus/types';

export interface ThemeOptions {
  primaryColor?: string;
};

export default function redocTheme(
  context: LoadContext,
  options: ThemeOptions,
): Plugin<null> {
  return {
    name: 'docusaurus-theme-redoc',
    /**
     * @see https://github.com/Redocly/redoc/issues/1257
     */
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ],
      };
    },
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      // Create theme data global
      setGlobalData({
        baseTheme: {
          colors: {
            primary: {
              main: options.primaryColor || "#25c2a0"
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
    getSwizzleComponentList() {
      return ['Redoc', 'ApiDoc'];
    },
    getClientModules() {
      return [path.join(__dirname, 'custom.css')];
    },
  };
};
