module.exports = {
  chainWebpack: config => {
    config
      .module
      .rule("svg-inline-loader")
      .test(/\.vue$/)
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
  }
};