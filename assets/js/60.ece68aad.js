(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{391:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"响应对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应对象"}},[t._v("#")]),t._v(" 响应对象")]),t._v(" "),s("p",[t._v("回馈结果,服务器给客服端浏览器反馈结果")]),t._v(" "),s("h2",{attrs:{id:"常见状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),s("ul",[s("li",[t._v("200 成功")]),t._v(" "),s("li",[t._v("302 重定向")]),t._v(" "),s("li",[t._v("304 请求资源未改变,使用缓存")]),t._v(" "),s("li",[t._v("400 请求错误")]),t._v(" "),s("li",[t._v("404 请求资源未找到")]),t._v(" "),s("li",[t._v("405 请求方式不支持")]),t._v(" "),s("li",[t._v("500 服务器错误")])]),t._v(" "),s("h2",{attrs:{id:"字节流响应消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字节流响应消息"}},[t._v("#")]),t._v(" 字节流响应消息")]),t._v(" "),s("ul",[s("li",[t._v("getOutpitStream()  获取响应字节输出流对象")]),t._v(" "),s("li",[t._v('setContentType("text/html;charset=UTF-8") 设置响应内容类型 以及字符编码')])]),t._v(" "),s("h2",{attrs:{id:"字符流响应消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符流响应消息"}},[t._v("#")]),t._v(" 字符流响应消息")]),t._v(" "),s("ul",[s("li",[t._v("getWriter()  获取字符流输出对象\n"),s("ul",[s("li",[t._v("write(obj)  写入数据给客户端")])])]),t._v(" "),s("li",[t._v('setContentType("text/html;charset=UTF-8") 设置响应内容类型 以及字符编码')])]),t._v(" "),s("h2",{attrs:{id:"设置缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置缓存"}},[t._v("#")]),t._v(" 设置缓存")]),t._v(" "),s("p",[t._v("对于不经常变化的数据,我可以设置合理的缓存时间,以避免浏览器频繁请求服务器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("setDateHeader(String name,long time)   设置消息头添加缓存,时间单位毫秒")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDateHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Expires"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Expires为过期时间关键字  time为当前时间 + 需要持续的时间")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"定时刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时刷新"}},[t._v("#")]),t._v(" 定时刷新")]),t._v(" "),s("p",[t._v("过了指定时间后,页面自动进行跳转")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("setHeader(String name,String value)  设置消息头定时刷新")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Refresh"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3;URL=/login.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Refresh 刷新关键字   3为3s  URL为虚拟路径")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"请求重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求重定向"}},[t._v("#")]),t._v(" 请求重定向")]),t._v(" "),s("p",[t._v("客户端的一次请求到达后,发现需要借助其他Servlet来实现功能")]),t._v(" "),s("p",[t._v("与请求转发不一样,地址栏会改变,两次请求和请求域对象不能共享数据,可以重定向其他服务器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("sendRedirect(String name)  设置重定向")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRedirect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/demo02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虚拟路径或者服务器URL")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])])]),t._v(" "),s("h2",{attrs:{id:"文件下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[t._v("#")]),t._v(" 文件下载")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("setHeader(String name,String value)")]),t._v(" "),s("ul",[s("li",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/octet-stream"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  设置响应头支持的类型 Content-Type消息头名称支持的类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// application/octet-stream 消息头参数 应用的类型为字节流")]),t._v("\nresponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Dispostition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attachment;filename=xxx.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置响应头以下载方式打开附件  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Content-Dispostition  处理形式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attachment;filename=xxx.zip   以附件形式处理 并指定下载文件的名词")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);