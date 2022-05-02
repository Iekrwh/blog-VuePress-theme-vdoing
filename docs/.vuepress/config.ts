/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import {
  readFileList,
  readTotalFileWords,
  readEachFileWords,
} from './webSiteInfo/readFile'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题
  //   theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Chiriri's blog",
      description:
        '后端技术博客,专注后端学习与总结。Java,Spring,Scala,Hadoop,Spark,Flink,Python,Linux,Docker等技术文章。',
    },
  },
  //   base: '/blog-VuePress-theme-vdoing/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    //背景图片配置
    bodyBgImg: '/img/aqua.jpg', // 你的图片路径(必须位于 public 下)，可以是 URL
    bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5

    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '后端',
        link: '/Java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          //   说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: 'Java',
            items: [
              { text: 'JavaSE', link: '/pages/844323/' },
              { text: 'JavaEE', link: '/pages/c10aa0/' },
              { text: '设计模式', link: '/pages/181a4e/' },
            //   { text: 'JVM', link: '/pages/' },
            //   { text: 'JUC', link: '/pages/' },
            //   { text: 'Spring', link: '/pages/' },
            ],
          },
          {
            text: 'Python',
            items: [
              { text: 'Python', link: '/pages/28b8ed/' },
              { text: 'Python模块', link: '/pages/e8a1e9/' },
              { text: '机器学习', link: '/pages/1bc408/' },
            ],
          },
          {
            text: '服务器',
            items: [
              { text: 'Linux', link: '/pages/0a1800/' },
              { text: 'MySQL', link: '/pages/a45110/' },
              { text: 'NoSQL', link: '/pages/2b3ac4/' },
            ],
          },
          {
            text: '项目',
            items: [
              { text: '传智健康', link: '/pages/5c2bda/' },
              { text: '畅购商城', link: '/pages/c57520/' },
            //   { text: '博客', link: '/pages/' },
            //   { text: 'WiKi', link: '/pages/' },
            //   { text: '谷粒商城', link: '/pages/' },
            //   { text: '云E办', link: '/pages/' },
            ],
          },
        ],
      },
      {
        text: '大数据',
        link: '/Hadoop/',

        items: [
          {
            text: 'Hadoop生态',
            items: [
              { text: 'Hadoop', link: '/pages/27eb49/' },
              { text: 'Zookeeper', link: '/pages/801487/' },
              { text: 'Hive', link: '/pages/060f01/' },
              { text: 'Flume', link: '/pages/c13817/' },
              { text: 'Kafka', link: '/pages/90b39f/' },
              { text: 'Azkaban', link: '/pages/bac882/' },
              { text: 'Hbase', link: '/pages/f4e35e/' },
              { text: 'Scala', link: '/pages/a9a4c4/' },
              { text: 'Spark', link: '/pages/5a1e93/' },
            ],
          },
          {
            text: '大数据项目',
            items: [
              { text: '离线数仓', link: '/pages/9ba1d7/' },
            //   { text: '用户画像', link: '/pages/' },
            //   { text: '实时计算', link: '/pages/' },
            ],
          },
        ],
      },
      {
        text: '前端',
        link: '/Web/',
        items: [
          {
            text: 'HTML基础',
            items: [
              { text: 'HTML', link: '/pages/1e0197/' },
              { text: 'JavaScript', link: '/pages/7a583f/' },
            ],
          },
          {
            text: 'Vue',
            items: [
              { text: 'Vue2', link: '/pages/6af871/' },
            //   { text: 'Vue3', link: '/pages/' },
              { text: 'Uni-APP', link: '/pages/79c836/' },

            ],
          },
          {
            text: 'React',
            items: [
            //   { text: 'React', link: '/pages/' },
              
            ],
          },

        ],
      },
      {
        text: '408',
        link: '/408/',
        items: [{ text: '数据结构与算法', link: '/pages/ef1313/' }],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      {
        text: '更多',
        // link: '/archives/',
        items: [{ text: '导航站', link: '/navigation/' }],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'Iekrwh/blog-VuePress-theme-vdoing', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Iekr', // 必需
      link: 'https://github.com/Iekrwh', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar:
        'https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/$7ZY44WI036RW5{EPWQXCX6.jpg',
      name: 'Iekr',
      slogan: '苦逼后端开发',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:iekr_wh@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Iekrwh',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'http://music.163.com/album?id=73927024',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'Iekr | Blog <br> <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022039661号</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    htmlModules,

    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2022-03-18', // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives', // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives', // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper', // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
    indexImg: {
      navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColorArray: [
        'transparent',
        'transparent',
        'transparent',
        'transparent',
      ], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
      bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      descFade: true, // 是否开启图片中间描述的淡入效果，默认为 false
      desc: [
        'Iekr个人博客。卷，使劲卷。',
        '故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt',
        '这一生波澜壮阔或是不惊都没问题 —— 来自 Weibo',
      ], // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
      descFontSize: '1.4rem', // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      descNextTime: 800, // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: true, // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 200, // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/twikoo@1.4.18/dist/twikoo.all.min.js',
      },
    ], //Twikoo评论
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css',
      },
    ], //代码块图标
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }], //解决chrome 网站统计不准确问题
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css',
      },
    ], //站点信息阿里矢量库
    [
      'meta',
      {
        name: 'keywords',
        content:
          '后端博客,个人技术博客,后端/前端开发,后端/前端框架,web前端,后端面试题,技术文档,学习,面试,Java,Scala,Hadoop,Spring,Spring Boot,Spring Cloud,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: 'code-PhM8VwEYco' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: <UserPlugins>[
    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'a6e1355287947096b88b',
    //       clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //       repo: 'blog-gitalk-comment', // GitHub 仓库
    //       owner: 'iekr', // GitHub仓库所有者
    //       admin: ['iekr'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    [
      //BlockToggle仿mac风格代码块 LastReadingPopup记录曾经阅读位置模块
      {
        name: 'custom-plugins',
        globalUIComponents: ['BlockToggle', 'LastReadingPopup', 'Twikoo'], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 新版本支持h2~h6标题
  },

  // 监听文件变化并重新构建
  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts'],
})
