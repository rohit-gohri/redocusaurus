import path from 'path';
import type {
  LoadContext,
  Plugin,
} from '@docusaurus/types';

export default function redocTheme(
  context: LoadContext,
  options: any,
): Plugin<null> {
  return {
    name: 'docusaurus-theme-redoc',
    getThemePath() {
      return path.join(__dirname, '..', 'dist', 'theme');
    },
    getTypeScriptThemePath() {
      return path.join(__dirname, '..', 'src', 'theme');
    },
    getSwizzleComponentList() {
      return ['Redoc'];
    },
    getClientModules() {
      return [path.join(__dirname, 'custom.css')];
    },
  };
};
