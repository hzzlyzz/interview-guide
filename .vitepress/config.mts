import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/interview-guide/',
  title: "宝典",
  description: "宝典",
  markdown: {
    attrs: {
      disable: true
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'JS', link: '/JS/JS-ch' },
          { text: '网络', link: '/Performance/performance-ch' },
          { text: '计算机网络', link: '/Network/Network-zh' },
          { text: '浏览器', link: '/Browser/browser-ch' },
          { text: '安全', link: '/Safety/safety-cn' },
          { text: '数据结构', link: '/DataStruct/dataStruct-zh' },
          { text: '算法', link: '/Algorithm/algorithm-ch' },
          {
            text: '框架',
            items: [
              { text: '框架', link: '/Framework/framework-zh' },
              { text: 'Vue', link: '/Framework/vue-zh' },
              { text: 'React', link: '/Framework/react-zh' },
            ]
          }
        ]
      }
    ],
    outline: {
      label: '目录',
      level: [1, 6]
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
  },
})
