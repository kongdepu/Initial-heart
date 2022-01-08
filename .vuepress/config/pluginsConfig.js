const { path } = require('@vuepress/shared-utils')
const moment = require('moment');
moment.locale("zh-cn")

module.exports = [
  // 页面初始化
  {
    name: '@vuepress-reco/vuepress-plugin-loading-page',
    enhanceAppFiles: [
      path.resolve(__dirname, '../bin/enhanceAppFile.js')
    ]
  },
  // 最后更新时间
  [ 
    '@vuepress/last-updated',
    {transformer: (timestamp) => moment(timestamp).format("LLLL")}
  ]
]

