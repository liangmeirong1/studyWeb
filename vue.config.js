const path = require('path')

const resolve = (fileName) => {
  return path.join(__dirname, fileName)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('cps', resolve('src/components'))
      .set('core', resolve('src/core'))
  },
  lintOnSave: false
}