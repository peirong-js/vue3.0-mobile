module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
        `
      },
      postcss: {
        plugins: [
          // require('postcss-pxtorem')({
          //   rootValue: 37.5,
          //   propList: ['*']
          // })
          require('postcss-px-to-viewport')({
            viewportWidth: 375,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlankList: ['ignore', 'tab-bar'],
            minPixelValue: 1
          })
        ]
      }
    }
  }

}
