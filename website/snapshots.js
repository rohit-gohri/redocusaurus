const urls = [
  {
    name: 'YAML Spec',
    path: '/examples/using-single-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-remote-url/' },
  { name: 'Nested Example', path: '/docs/nested/nested-1' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

module.exports = () => {
  const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';
  return urls.map(({ name, path }) => {
    return {
      name,
      url: `${baseUrl}${path}`,
    };
  });
};
