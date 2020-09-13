module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    entry: {
      app: './src/main.ts',
    },
  },
  chainWebpack: config => {
    const images = config.module.rule('images');
    images.clear();
    images
      .test(/\.(png|jpg)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({limit: 9e9999, esModule: false});

  },
  css: {
    extract: false,
    requireModuleExtension: false,
    loaderOptions: {
      postcss: {
        execute: true,
      },
    },
  },
}
