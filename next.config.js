module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    )
    return config
  }
}
