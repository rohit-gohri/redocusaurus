import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
}
