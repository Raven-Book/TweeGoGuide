import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/TweeGoGuide/',
  title: "TweeGo Guide",
  description: "TweeGo 开发手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开发工具', link: '/开发工具/准备工作' }
    ],

    sidebar: [
      {
        text: '开发工具',
        items: [
          { text: '准备工作', link: '/开发工具/准备工作' },
          { text: 'Git的使用', link: '/开发工具/Git的使用' }
        ]
      },
      {
        text: '正式开始',
        items: [
          { text: '环境部署', link: '' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
