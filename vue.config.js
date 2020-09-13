module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    entry: {
      app: './src/main.ts',
      /*styles: [
        './node_modules/milligram/dist/milligram.min.css',
      ],*/
    },
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
