const PROXY_CONFIG = [
  {
    context: [
      '/**'
    ],
    target: 'https://superheroapi.com/api/3053606484688713',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
  },
];

module.exports = PROXY_CONFIG;
