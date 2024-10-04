import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/TweeGoGuide/',
  title: "TweeGo Guide",
  description: "TweeGo 开发手册",
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Macros', link: '/黑星的Macro合集/宏列表 第一弹' },
      { text: '爱发电', link: 'https://afdian.com/a/ravenbook'}
    ],

    sidebar: [
      {
        text: '开发工具',
        items: [
          { text: '准备工作', link: '/开发工具/准备工作' },
          { text: 'Cordova 打包', link: '/开发工具/Cordova'},
          { text: 'Git的使用', link: '/开发工具/Git的使用' }
        ]
      },
      {
        text: '正式开始',
        items: [
          { text: "前置知识", link: "/正式开始/前置知识"},
          { text: 'TweeGo 起步', link: '/正式开始/TweeGo起步' },
          { text: '变量、对象与流程控制', link:'/正式开始/变量、对象与流程控制'},
          { text: "方糖常见问题", link: "/正式开始/方糖常见问题"},
        ]
      },
      {
        text: '黑星的Macro合集',
        items: [
          { text: "宏列表 第一弹", link: "/黑星的Macro合集/宏列表 第一弹"},
      
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Raven-Book/TweeGoGuide' }
    ],
    footer: {
      copyright: "Copyright © 2024–Present Black Star"
    }
  },
  rewrites: {
    // 匹配 src 目录下的任意路径并去掉 src
    'src/:path*': ':path*'
  }
})
