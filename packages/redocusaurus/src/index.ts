import type {
  LoadContext,
} from '@docusaurus/types';
import type {
  PluginOptions
} from 'docusaurus-plugin-redoc';

export default function preset(context: LoadContext, opts: {specs: PluginOptions[] | PluginOptions} = {specs: []}) {
  let specs: PluginOptions[] = [];
  if (Array.isArray(opts.specs)) {
    specs = opts.specs;
  }
  else {
    specs = [opts.specs];
  }
  return {
    themes: [
      require.resolve('docusaurus-theme-redoc'),
    ],
    plugins: specs.map((pluginOpts, index) => ([
      require.resolve('docusaurus-plugin-redoc'),
      {
        id: `plugin-redoc-${index}`,
        ...pluginOpts
      },
    ])),
  };
};