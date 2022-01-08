const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')

module.exports = {
  "title": "初心",
  "description": "不忘初心",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // 右侧启用子侧边栏
    "subSidebar": 'auto',
    // 导航栏
    "nav": navConfig,
    // 侧边栏
    "sidebar": sidebarConfig,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新时间",
    "author": "kongdepu",
    "authorAvatar": "/avatar.png",
    "record": "ICP 备案文件",
    "startYear": "2017"
  },
  "markdown": {
    // 是否显示行号
    "lineNumbers": true
  },
  // 插件
  "plugins": pluginsConfig,
}