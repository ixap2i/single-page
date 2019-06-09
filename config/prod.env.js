'use strict'
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/single-page/'
  : '/'
  // NODE_ENV: '"production"'
}
