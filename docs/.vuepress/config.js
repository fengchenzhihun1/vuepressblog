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
    lastUpdated: '上次更新',
    repo: 'fengchenzhihun1/vuepressblog',
    editLinks: true,
    sidebarDepth: 4,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '基础知识',
            link: '/a_a_a_basicknowledge/'
          },
          {
            text: '进阶',
            link: '/advance/'
          },          
          {
            text: '框架',
            link: '/framwork/'
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
                  text:'常用工具One',
                  items:[{
                     text:'PDF转换器',
                     link:'https://smallpdf.com/cn/pdf-to-word'
                  },{
                  text:'json编辑器',
                  link:'https://www.bejson.com/jsoneditoronline'
                  },{
                    text:'生成工具神器',
                    link:'https://tableconvert.com/?output=text&data=id%2C%20name%2C%20age%2C%20gender%0A1%2C%20Lawrence%2C%2039%2C%20M%0A2%2C%20Oliver%2C%2025%2C%20M%0A3%2C%20Roberta%2C%2017%2C%20F%0A4%2C%20Bamboo%2C%2070%2C%20F%0A'
                  },{
                    text:'CRON表达式',
                    link:'http://cron.qqe2.com'
                  },{
                    text:'代码格式化工具',
                    link:'http://tool.oschina.net/codeformat/html'
                  },{
                    text:'数学公式',
                    link:'https://zh.numberempire.com/latexequationeditor.php'
                  },{
                    text:'二维码生成工具',
                    link:'https://cli.im'
                  },{
                      text:'在线编码转换',
                      link:'http://tool.chinaz.com/tools/native_ascii.aspx'
                    }
                ]
                }
                ,{
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
                    },{
                      text:'advanced-java',
                      link:'https://github.com/doocs/advanced-java'
                    }
                  ]
                }
             ]
          },{
            text:'项目总结',
            link:'/projectsummary/'
          },{
            text:'数据库专题',
            link:'/database/'
          },{
            text:'其他',
            link:'/f_a_other/'
          },{
            text:'黑马57期',
            link:'/blackhouse57/basicgrammar/'
          }
        ],
        sidebar: {
          '/a_a_a_basicknowledge/': genSidebarConfig('java核心技术','java设计模式','java算法与数据结构'),
          '/advance/':genAdvanceConfig('多线程','高并发','分布式','JVM','NoSql数据库','中间件','源码','其他'),
          '/framwork/':genFramWorkConfig('SpringFramWork','springBoot'),
          '/blackhouse57/basicgrammar/':genBlackHouse57Config('java教程'),
          '/projectsummary/':genSideProblemConfig('项目总结'), 
          '/database/':genSideDataBaseConfig('数据库专题'),
          '/a_c_datastructuresAndAlgorithms/':genSidDatastructuresAndAlgorithms("设计模式"),
          '/a_b_design/':genSidDesign("数据结构与算法"),
          '/f_a_other/':genSidOther("公开课")
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
function genSidDesign (groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        '01_UML图',
        '02-设计原则',
        '03_工厂方法',
        '04_建造者' ,
        '05_单例模式'

      ]
    }
  ]
}
function genSidDatastructuresAndAlgorithms (groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        'datastructuresAndAlgorithms',
        'jk数据结构与算法之美学习笔记',
      ]
    }
  ]
}
function genSidOther (groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
          '',
         '源码'
      ]
    }
  ]
}
/*java基础 */
function genSidebarConfig (groupA, groupB, groupC, groupD) {
  return [{
      title:groupA,
      collapsable: false,
      children: [
        /*java核心技术*/
        '核心技术'
      ]
    },
    {
      title:groupB,
      collapsable: false,
      children: [
      /*设计模式*/
        '设计模式'
  ]
    },
    {
      title:groupC,
      collapsable: false,
      children: [
         /*java数据结构与算法*/
         '数据结构与算法'
      ]
    }
  ]
}
/* 进阶*/
function genAdvanceConfig (groupA, groupB,groupC, groupD,groupE, groupF,groupG, groupH) {
  return [
    {
      title:groupA,
      collapsable: false,
      /*多线程*/
      children: [
        '多线程/多线程概念'
      ]
    }, {
      title:groupB,
      collapsable: false,
      /*高并发*/
      children: [
        ''
      ]
    }, {
      title:groupC,
      collapsable: false,
      /*分布式*/
      children: [
        ''
      ]
    }, {
      title:groupD,
      collapsable: false,
      /*JVM*/
      children: [
        ''
      ]
    }, {
      title:groupE,
      collapsable: false,
      /*NoSQL*/
      children: [
        ''
      ]
    }, {
      title:groupF,
      collapsable: false,
      /*中间件*/
      children: [
        ''
      ]
    }, {
      title:groupG,
      collapsable: false,
      /*源码*/
      children: [
        ''
      ]
    }, {
      title:groupH,
      collapsable: false,
      /*其他*/
      children: [
        ''
      ]
    }
  ]
}
/*黑马57期教程 */
function genBlackHouse57Config(groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        '',
        'day01【Object类、常用API】-笔记',
        'day02【Collection、泛型】-笔记',
        'day03【List、Set】',
        'day04【Map】',
        'day05【异常、线程】',
        'day07【线程池、Lambda表达式】',
        'day08【File类、递归】',
        'day09【字节流、字符流】',
        'day10【缓冲流、转换流、序列化流、打印流】',
        'day11【网络编程】'
      ]
    }
  ]
}
/*框架 */
function genFramWorkConfig (groupA, groupB) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        '',
      ]
    },{
      title:groupB,
      collapsable: false,
      children: [
        '',
      ]
    }

  ]
}


function genSideProblemConfig (groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        '',
        'mirproblem',
        'database'
      ]
    }
  ]
}
function genSideDataBaseConfig (groupA) {
  return [
    {
      title:groupA,
      collapsable: false,
      children: [
        '',
        '数据库'
      ]
    }
  ]
}