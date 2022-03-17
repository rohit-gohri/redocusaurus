import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  /**
   * @see https://github.com/rohit-gohri/redocusaurus/issues/89#issuecomment-942256382
   */
  // @ts-expect-error prism global
  window.Prism = window.Prism || {};
  // @ts-expect-error prism global
  window.Prism.manual = true;
}
