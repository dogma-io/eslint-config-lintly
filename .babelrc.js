module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '6',
        },
      },
    ],
    '@babel/react',
  ],
}
