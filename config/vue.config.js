module.exports = {
  configureWebpack: {
    publicPath: '/single-page',
    devServer: {
      historyApiFallback: true
    },
    output: {
      libraryExport: ''
    }
  }

}
