module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    i18n: {
        locales: ["de"],
        defaultLocale: "de",
    },
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
