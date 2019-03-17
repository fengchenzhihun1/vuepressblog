module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      title: '陈峰的博客',
      description: 'Vue 驱动的静态站点生成工具'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'docschina/vuepress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '每日学习',
            link: '/everyDayStudy/',
          },
          {
            text: '英语学习',
            link: '/englishStudy/'
          },
          {
            text: '算法学习',
            link: '/letterrcode/'
          }
        ],
        sidebar: {
          '/everyDayStudy/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'aaa'
      ]
    }
  ]
}
