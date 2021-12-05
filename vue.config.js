module.exports = {
  devServer: {
    port: 9000,
    disableHostCheck: true,
    publicPath: '/',
    historyApiFallback: true
  },
  outputDir: 'dist',
  filenameHashing: false,
  productionSourceMap: false,
}
