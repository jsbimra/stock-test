const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  },
  target: 'serverless',
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    }
})

// module.exports = {
//     target: 'serverless',
//     exportPathMap: function () {
//         return {
//             '/': { page: '/' }
//         }
//     }
// }