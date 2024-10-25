import path from 'path';
import type { LoadContext, Plugin } from '@docusaurus/types';
import type { ThemeOptions, GlobalData } from './types/options';
import { getGlobalData } from './redocData';

// eslint-disable-next-line import/no-extraneous-dependencies, import/order

export type { ThemeOptions, GlobalData };

export default function redocTheme(
  context: LoadContext,
  options: ThemeOptions,
): Plugin<null> {
  return {
    name: 'docusaurus-theme-redoc',
    configureWebpack(_config, isServer,{currentBundler}) {
      const bundler = currentBundler.instance ?? require("webpack")
      return {
        plugins: [
          new bundler.NormalModuleReplacementPlugin(
            /^tty$/,
            require.resolve('./tty'),
          ),
          new bundler.DefinePlugin({
            'process.versions.node': JSON.stringify(
              process.versions.node || '0.0.0',
            ),
            'process.platform': JSON.stringify(''),
            // IMPORTANT: To fix debug library‘s bug #236
            // {}.DEBUG = namespaces; // SyntaxError: Unexpected token '.'
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
            'process.env': JSON.stringify({}),
          }),
          ...(isServer
            ? [
                new bundler.NormalModuleReplacementPlugin(
                  /theme\/Redoc\/Styles/,
                  path.join(__dirname, 'theme', 'Redoc', 'ServerStyles.js'),
                ),
              ]
            : []),
        ],
      };
    },
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;
      const globalData = await getGlobalData(options);

      setGlobalData(globalData);
    },
    getThemePath() {
      return path.join(__dirname, '..', 'dist-jsx', 'theme');
    },
    getTypeScriptThemePath() {
      return path.join(__dirname, '..', 'src', 'theme');
    },
    getClientModules() {
      return [
        path.join(__dirname, 'custom.css'),
        path.join(__dirname, 'global.js'),
      ];
    },
  };
}

const getSwizzleComponentList = (): string[] => {
  return ['Redoc', 'ApiDoc'];
};

export { getSwizzleComponentList };
