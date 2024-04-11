const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  pageDataCollectionTimeout: 120000, // Increase timeout to 120 seconds
})

module.exports = withNextra()
