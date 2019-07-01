module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      title: '陈峰的博客',
      description: '记录我的IT成长历程'
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
    repo: 'fengchenzhihun1/vuepressblog',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '读书笔记',
            link: '/readnot/'
          },{
             text: '网站链接',
             items: [
                {text: '视频网站',
                 items:[
                  { text:'哔哩哔哩',
                    link:'https://www.bilibili.com/account/history'
                  },
                  {
                    text:'慕课网',
                    link:'https://class.imooc.com/'
                  }
                  ,
                  {
                    text:'尚硅谷谷粒学院',
                    link:'http://www.gulixueyuan.com/course/explore/java?orderBy=latest'
                  }
                 ]
                },
                {
                  text:'常用博客',
                  items: [
                     {  
                       text:"我的博客", 
                       link:'https://blog.csdn.net/u012878380'
                     } 
                  ]
                },{
                  text:'常用工具',
                  items:[{
                     text:'PDF转换器',
                     link:'https://smallpdf.com/cn/pdf-to-word'
                  },{
                  text:'json编辑器',
                  link:'https://www.bejson.com/jsoneditoronline'
                  },{
                    text:'生成工具神器',
                    link:'https://tableconvert.com/?output=text&data=id%2C%20name%2C%20age%2C%20gender%0A1%2C%20Lawrence%2C%2039%2C%20M%0A2%2C%20Oliver%2C%2025%2C%20M%0A3%2C%20Roberta%2C%2017%2C%20F%0A4%2C%20Bamboo%2C%2070%2C%20F%0A'

                  }
                  ,{
                    text:'CRON表达式',
                    link:'http://cron.qqe2.com/'
                  },{
                    text:'代码格式化工具',
                    link:'http://tool.oschina.net/codeformat/html'
                  },{
                    text:'数学公式',
                    link:'https://zh.numberempire.com/latexequationeditor.php'
                  },{
                    text:'二维码生成工具',
                    link:'https://cli.im/'
                  },{
                    text:'在线编码转换器',
                    linlk:'http://tool.chinaz.com/tools/native_ascii.aspx'
                  }
                ]
                },{
                  text:'GitHub',
                  items:[
                    {
                      text:'JavaGuide',
                      link:'https://github.com/Snailclimb/JavaGuide'
                    },{
                      text:'CS-Notes',
                      link:'https://github.com/CyC2018/CS-Notes'
                    },{
                      text:'free-programming-books-zh_CN',
                      link:'https://github.com/justjavac/free-programming-books-zh_CN'
                    },{
                      text:'advanced-java',
                      link:'https://github.com/doocs/advanced-java'
                    }
                    ,{
                      text:'',
                      link:''
                    }
                    ,{
                      text:'',
                      link:''
                    }
                    ,{
                      text:'',
                      link:''
                    }
                  ]
                }
             ]
          }
        ],
        sidebar: {
          '/readnot/': genSidebarConfig('java基础','微服务')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ]
}

function genSidebarConfig (groupA, groupB) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        'springThink'
      ]
    },
    {
      title:groupB,
      collapsable: false,
      children: [
        'microServiceFromDesignToDeploymen'
      ]
    }


  ]
}
