module.exports = {
  publicPath: '/single-page',
  devServer: {
    port: 9000,
    disableHostCheck: true,
    publicPath: '/',
    historyApiFallback: true
  },
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
}
