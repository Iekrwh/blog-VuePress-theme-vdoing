(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{553:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"优化打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化打包"}},[s._v("#")]),s._v(" 优化打包")]),s._v(" "),a("h2",{attrs:{id:"通过-report-查看不同包打包耗时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-report-查看不同包打包耗时"}},[s._v("#")]),s._v(" 通过 report 查看不同包打包耗时")]),s._v(" "),a("p",[s._v("在package.json 中scripts的build:'vue-cli-service build --report'   加上--report配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打包成功后在dist文件夹的"),a("code",[s._v("report.html")]),s._v("并在浏览器中打开,通过图形的分析,可以看到每个包的占比.")]),s._v(" "),a("h2",{attrs:{id:"gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip压缩"}},[s._v("#")]),s._v(" Gzip压缩")]),s._v(" "),a("p",[s._v("HTTP协议上的GZIP编码能帮助我们压缩网站资源文件,减少要传输的文件大小,使流量减少加载更快")]),s._v(" "),a("p",[s._v("如何开启?它需要前后端配置才能使用.后端要把服务器软件开启Gzip压缩功能(主流的服务器软件默认都是开启Gzip),客户端不需要做任何处理,取决于浏览器(太旧的浏览器可能不支持)")]),s._v(" "),a("p",[s._v("如何检测内容是否已开启了Gzip压缩?可以查看响应头是否有以下配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" gzip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用 Vue CLI 官方推荐的serve 命令行工具")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. 安装 工具")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --global serve\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\nserve --version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在打包结果目录执行下面命令启动一个 http 静态服务(默认开启 Gzip 压缩启动服务)")]),s._v("\nserve -s ./\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用gzip 使用 -u参数")]),s._v("\nserve -s -u ./\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"不打包第三方包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不打包第三方包"}},[s._v("#")]),s._v(" 不打包第三方包")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("<script src=''>")]),s._v("标签引用的第三方,wepack不做任何处理")]),s._v(" "),a("p",[s._v("所以我们可以通过cdn来加载第三方,优化打包速度.")]),s._v(" "),a("p",[s._v("https://www.jsdelivr.com/")]),s._v(" "),a("p",[a("strong",[s._v("注意模块版本 详细模块信息package.json")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("https://cdn.jsdelivr.net/npm/element-ui@2.15.3/lib/theme-chalk/index.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 先加载css样式 再引入vue 再引入 element --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("https://cdn.jsdelivr.net/npm/element-ui@2.15.3/lib/index.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("加载完后,是无法直接使用的 因为我们通过import导入")]),s._v(" "),a("p",[s._v("所以我得再在vue.config.js中追加")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("extenals")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为在index.html 加载的 所以得全局暴露")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性名 : 加载的包名")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'vue'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'elment-ui'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ELEMENT'")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);