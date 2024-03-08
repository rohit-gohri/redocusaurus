import type {
  PluginOptions,
  PluginDirectUsageOptions,
} from 'docusaurus-plugin-redoc';
import type { ThemeOptions } from 'docusaurus-theme-redoc';

interface FolderOptions {
  /**
   * Default is `openapi`. This is similar to how
   * Will load all YAML or JSON files in the folder
   * that are named `openapi` or end with `.openapi`, like:
   *   - `index.openapi.yaml`
   *   - `swagger.openapi.yaml`
   *   - `swagger.openapi.json`
   */
  folder?: string;
  /**
   * The path at which the files will be rendered,
   * if the file is called `index.openapi.yaml` it will be rendered at base path itself
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
  /**
   * The folder is not going to be hot-reloaded
   * but any changes to specs loaded at start will trigger live-reload
   */
  openapi?: FolderOptions;
  theme?: Omit<ThemeOptions, 'id'>;
};

export type PresetEntry = ['redocusaurus', PresetOptions];
