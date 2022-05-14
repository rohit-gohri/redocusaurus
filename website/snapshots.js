const urls = [
  {
    name: 'YAML Spec',
    path: '/examples/using-single-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-remote-url/' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';

const snapshots = urls.map(({ name, path }) => {
  return {
    name,
    url: `${baseUrl}${path}`,
    waitForTimeout: 400,
    execute: {
      afterNavigation() {
        // Switch to light mode if currently dark mode
        document
          .querySelector(
            '[title^="Switch between dark and light mode (currently dark mode)"]',
          )
          // @ts-ignore
          ?.click();
      },
    },
    additionalSnapshots: [
      {
        suffix: ' (Dark Mode)',
        execute() {
          // Switch to dark mode if currently light mode
          document
            .querySelector(
              '[title^="Switch between dark and light mode (currently light mode)"]',
            )
            // @ts-ignore
            ?.click();
        },
      },
    ],
  };
});

module.exports = snapshots;
