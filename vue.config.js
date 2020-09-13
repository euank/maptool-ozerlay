module.exports = {
  chainWebpack: config => config.optimization.minimize(false),
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false,
  },
}
