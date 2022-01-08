const { path } = require('@vuepress/shared-utils')

module.exports = [
  // 页面初始化
  {
    name: '@vuepress-reco/vuepress-plugin-loading-page',
    enhanceAppFiles: [
      path.resolve(__dirname, '../bin/enhanceAppFile.js')
    ]
  }
]

