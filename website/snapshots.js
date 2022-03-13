const urls = [
  {
    name: 'YAML Spec',
    path: '/examples/using-spec-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-spec-url/' },
  { name: 'Schema Imports', path: '/docs/guides/schema-imports' },
];

module.exports = () => {
  const baseUrl = process.env.TARGET_URL || 'http://localhost:3000';
  return urls.map(({name, path}) => {
    return {
      name,
      url: `${baseUrl}${path}`,
    };
  })
};
