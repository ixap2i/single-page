module.exports = {

  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    output: {
      libraryExport: ''
    }
  }

}
