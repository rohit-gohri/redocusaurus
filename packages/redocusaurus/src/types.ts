import type {
  PluginOptions,
  PluginDirectUsageOptions,
} from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';

interface FolderOptions {
  /**
   * Path to the openapi specs directory on the file system, relative to site
   * directory.
   * @default openapi
   * Will load all YAML or JSON files in the folder
   * that are named `openapi` or end with `.openapi`, like:
   *   - `index.openapi.yaml`
   *   - `swagger.openapi.yaml`
   *   - `swagger.openapi.json`
   * The folder is not going to be live-reloaded
   * but any changes to specs loaded at start will be watched and will trigger live-reload
   */
  path?: string;
  /**
   * URL route for the api docs section of your site. **DO NOT** include a
   * trailing slash. Use `/` for shipping api docs without base path.
   * @default /api
   * If the file is called `index.openapi.yaml` it will be rendered at base path itself
   * Otherwise the name of the file path from the base folder will be used as the url path
   */
  routeBasePath?: string;
}

export type SpecOptions = Omit<PluginOptions, keyof PluginDirectUsageOptions>;

export type PresetOptions = {
  id?: string;
  debug?: boolean;
  /**
   * Path to the Redocly config file `redocly.yaml`
   * @see https://redocly.com/docs/cli/configuration/configuration-file/
   */
  config?: string;
  specs?: SpecOptions[];
  openapi?: FolderOptions;
  theme?: Omit<ThemeOptions, 'id'>;
};

export type PresetEntry = ['redocusaurus', PresetOptions];
