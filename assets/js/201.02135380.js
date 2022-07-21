(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{532:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hive-客户端命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hive-客户端命令"}},[s._v("#")]),s._v(" Hive 客户端命令")]),s._v(" "),a("p",[a("strong",[s._v("Hive****中变量和属性命名空间")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令空间")]),s._v(" "),a("th",[s._v("使用权限")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("hivevar")]),s._v(" "),a("td",[s._v("可读/可写")]),s._v(" "),a("td",[s._v("（hive v0.80以及之后的版本）用户自定义变量")])]),s._v(" "),a("tr",[a("td",[s._v("hiveconf")]),s._v(" "),a("td",[s._v("可读/可写")]),s._v(" "),a("td",[s._v("Hive相关的配置属性")])]),s._v(" "),a("tr",[a("td",[s._v("system")]),s._v(" "),a("td",[s._v("可读/可写")]),s._v(" "),a("td",[s._v("Java定义的配置环境")])]),s._v(" "),a("tr",[a("td",[s._v("env")]),s._v(" "),a("td",[s._v("只可读")]),s._v(" "),a("td",[s._v("Shell环境定义的环境变量")])])])]),s._v(" "),a("ul",[a("li",[s._v("--define key＝value实际上和--hivevar key=value是等价的")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive --define "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bar "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在shell命令行的根目录下输入，进入hive的cli命令行，并且定义了一个变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看foo变量值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hivevar:foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询指定空间变量下的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hivevar:foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bar2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询赋值")]),s._v("\ncreate table toss1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i int,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hivevar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("foo}")]),s._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建表时也可引用变量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("hiveconf   用于配置Hive行为的所有属性")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive --hiveconf hive.cli.print.current.db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过hiveconf将指定属性赋值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hive.cli.print.current.db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询属性值")]),s._v("\nhive --hiveconf  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询值")]),s._v("\nSELECT * FROM whatsit WHERE  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hiveconf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("y}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语句中也可以使用属性")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("-e 执行一个或者多个查询（使用分号分隔），执行结束后hive CLI立即退出")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM my_table"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询后退出hive")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("-S -e 增加-S选项可以开启静默模式，这样可以在输出结果中去掉“OK”和“Time taken…”等行，以及其他一些无关紧要的输出信息  只输出结果")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive -S -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM my_table LIMIT 3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/usr/tmp/my_table_3.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只输出结果 并写入到指定文件中")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在客户端外 文件中执行sql")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/hive/hive/withqueries.hql "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建文件里面存放sql语句")]),s._v("\nSELECT * FROM my_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive -f /usr/hive/hive/withqueries.hql "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动hive时 加载指定文件中的sql语句")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在hive客户端 执行指定的sql文件")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("withqueries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("-i  通过文件中sql语句 批量设置值")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/hive/hive/.hiverc\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hive.cli.print.current.db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" hive.exec.mode.local.auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("hive -i /usr/hive/hive/.hiverc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加载指定文件的设定")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);