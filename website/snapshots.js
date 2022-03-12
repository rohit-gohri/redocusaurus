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

if (process.env.VERCEL_URL) {
  process.env.DEPLOY_PRIME_URL = `https://${process.env.VERCEL_URL}`;
}

module.exports = () => {
  const baseUrl = process.env.DEPLOY_PRIME_URL || 'http://localhost:3000';
  return urls.map(({name, path}) => {
    return {
      name,
      url: `${baseUrl}${path}`,
    };
  })
};
