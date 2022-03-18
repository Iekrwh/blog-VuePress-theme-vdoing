(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{789:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"azkaban实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azkaban实战"}},[s._v("#")]),s._v(" Azkaban实战")]),s._v(" "),t("h2",{attrs:{id:"command-单一job案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-单一job案例"}},[s._v("#")]),s._v(" Command 单一job案例")]),s._v(" "),t("p",[s._v("在 windows 环境，创建job描述文件，编辑内容如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#command.job")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mkdir /opt/module/test_azkaban\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("将此文件打包成zip 不能带中文")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123083346221.png",alt:"image-20211123083346221"}})]),s._v(" "),t("p",[s._v("创建项目")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123083501719.png",alt:"image-20211123083501719"}})]),s._v(" "),t("p",[s._v("上传zip包")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123083630641.png",alt:"image-20211123083630641"}})]),s._v(" "),t("p",[s._v("执行")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123083719757.png",alt:"image-20211123083719757"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123083740977.png",alt:"image-20211123083740977"}})]),s._v(" "),t("h2",{attrs:{id:"多job工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多job工作流"}},[s._v("#")]),s._v(" 多job工作流")]),s._v(" "),t("p",[s._v("创建有依赖关系的多个job描述")]),s._v(" "),t("p",[s._v("第一个job: foo.job")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#foo.job")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mkdir /opt/module/az\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("第二个job:bar.job")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bar.job")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("foo\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("touch /opt/module/az/test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("打包成zip包提交到azkaban中")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123084339347.png",alt:"image-20211123084339347"}})]),s._v(" "),t("h2",{attrs:{id:"mapreduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce"}},[s._v("#")]),s._v(" MapReduce")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#foo.job")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yarn jar hadoop-mapreduce-examples-3.1.3.jar wordcount /input /output\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("注意jar包也要打包进zip中 一般我们使用自定义的mapreduce")]),s._v(" "),t("p",[s._v("上传执行")]),s._v(" "),t("h2",{attrs:{id:"hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive"}},[s._v("#")]),s._v(" hive")]),s._v(" "),t("p",[s._v("hive.sql")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" aztest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" azres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" external "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" aztest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" format delimited "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),s._v("location "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/student'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" inpath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/aztest/hiveinput'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" aztest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" azres "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" aztest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" overwrite directory "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/aztest/hiveoutput'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" aztest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("hive.job")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#hive.job")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("command\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hive -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hive.sql'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("打包上传并执行")])])}),[],!1,null,null,null);a.default=r.exports}}]);