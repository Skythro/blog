module.exports = {
  title: 'Skythro Blog',
  description: 'demo',
  head: [
    // ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig:{
    sidebar: 'auto',
    nav: [{text: "主页", link: "/"      },
        { text: "node", link: "/node/" },
        { text: "前端",
          items: [
            { text: "html", link:"/web/html/"},
            { text: "css", link:"/web/css/"},
            ]
        },
        { text: "数据库", link: "/database/"   },
        { text: "android", link: "/android/"   },
        { text: "面试问题", link: "/interview/" }
      ],
  }
}