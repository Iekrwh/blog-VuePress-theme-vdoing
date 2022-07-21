(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{388:function(a,e,t){"use strict";t.r(e);var r=t(3),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[a._v("#")]),a._v(" 日志")]),a._v(" "),e("ul",[e("li",[a._v("Logger.getLogger(类 字节码):  使用log4j的api获取日志对象 不推荐使用")]),a._v(" "),e("li",[a._v("LoggerFactory.getLogger(类 字节码): 使用slf4j的api获取日志对象")])]),a._v(" "),e("h2",{attrs:{id:"记录器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录器"}},[a._v("#")]),a._v(" 记录器")]),a._v(" "),e("ul",[e("li",[a._v("DEBUG")]),a._v(" "),e("li",[a._v("INFO")]),a._v(" "),e("li",[a._v("WARN")]),a._v(" "),e("li",[a._v("EEROR")]),a._v(" "),e("li",[a._v("FATAL")])]),a._v(" "),e("p",[a._v("配置规则:只输出级别不低于设定级别的日志信息")]),a._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("p",[a._v("创建 log4j.properties 文件")]),a._v(" "),e("h3",{attrs:{id:"根logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根logger"}},[a._v("#")]),a._v(" 根Logger")]),a._v(" "),e("p",[a._v("log4j.rootLogger=日志级别,appenderName1,appenderName2,...")]),a._v(" "),e("p",[a._v("日志级别:OFF、FATAL、EEROR、WARN、INFO、DEBUG、ALL或者自定义级别")]),a._v(" "),e("p",[a._v("appenderName1:指定日志信息要输出到哪里,可以同时指定多个输出目的地")]),a._v(" "),e("p",[a._v("如:log4j.rootLogger=info,ca,fa")]),a._v(" "),e("h3",{attrs:{id:"appender"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appender"}},[a._v("#")]),a._v(" appender")]),a._v(" "),e("p",[a._v("org.apache.log4j.ConsoleAppender:输出到控制台")]),a._v(" "),e("p",[a._v("org.apache.log4j.FileAppender:输出到文件")]),a._v(" "),e("p",[a._v("如:log4j.appender.ca=org.apache.log4j.ConsoleAppender")]),a._v(" "),e("h4",{attrs:{id:"控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制台"}},[a._v("#")]),a._v(" 控制台")]),a._v(" "),e("ul",[e("li",[a._v("ImmediateFlush=true:  所有消息都会被立即输出,默认为true,false不输出")]),a._v(" "),e("li",[a._v("Target=System.err:   默认值为System.out  在控制台打印时显示的颜色级别 err为红色警告 默认为黑色")])]),a._v(" "),e("p",[a._v("如:")]),a._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log4j.appender.ca.ImmediateFlush")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log4j.appender.ca.Target")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("System.out")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[a._v("#")]),a._v(" 文件")]),a._v(" "),e("ul",[e("li",[a._v("ImmediateFlush=true:  所有消息都会被立即输出,默认为true,false不输出")]),a._v(" "),e("li",[a._v("Append=false: 默认值为true, true为将日志追加到文件中,false为覆盖写入")]),a._v(" "),e("li",[a._v("File=路径:  将信息输出到指定的logging.log4j文件中")])]),a._v(" "),e("p",[a._v("如:")]),a._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log4j.appender.ca.ImmediateFlush")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log4j.appender.ca.Append")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log4j.appender.ca.File")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("D:/")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[a._v("#")]),a._v(" Layout")]),a._v(" "),e("ul",[e("li",[a._v("org.apache.log4j.PatternLayout:  自定义布局模式  比较常用\n"),e("ul",[e("li",[a._v("ConversionPattern=%m%n : 自定义规则")]),a._v(" "),e("li",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20210803193303147.png",alt:"image-20210803193303147"}})])])]),a._v(" "),e("li",[a._v("org.apache.log4j.SimpleLayout:   包含日志信息的级别和信息字符串")]),a._v(" "),e("li",[a._v("org.apache.log4j.TTCCLayout:   包含日志产生时间 线程 类别 等信息")])]),a._v(" "),e("p",[a._v("如:  log4j.appender.ca.layout=org.apache.log4j.PatternLayout")])])}),[],!1,null,null,null);e.default=s.exports}}]);