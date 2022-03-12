const urls = [
  { name: 'Landing Page', path: '/' },
  { name: 'Docs', path: '/docs' },
  { name: 'Examples', path: '/examples' },
  {
    name: 'YAML Spec',
    path: '/examples/using-spec-yaml/',
  },
  { name: 'URL Spec', path: '/examples/using-spec-url/' },
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
