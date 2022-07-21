(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{570:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hbase与hive的集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase与hive的集成"}},[s._v("#")]),s._v(" Hbase与Hive的集成")]),s._v(" "),a("h2",{attrs:{id:"hbase与hive的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase与hive的对比"}},[s._v("#")]),s._v(" HBase与Hive的对比")]),s._v(" "),a("p",[s._v("1.Hive\n(1) 数据分析工具\nHive的本质其实就相当于"),a("strong",[s._v("将HDFS中已经存储的文件在Mysql")]),s._v("中做了一个双射关系，以方便使用HQL去管理查询。\n(2) 用于数据分析、清洗\nHive适用于离线的"),a("strong",[s._v("数据分析和清洗，延迟较高")]),s._v("。\n(3) 基于HDFS、MapReduce\nHive存储的数据依旧在DataNode上，"),a("strong",[s._v("编写的HQL语句终将是转换为MapReduce代码执行")]),s._v("。\n2．HBase\n(1) 数据库\n是一种"),a("strong",[s._v("面向列族存储的非关系型数据库")]),s._v("。\n(2) 用于存储结构化和非结构化的数据\n适用于"),a("strong",[s._v("单表非关系型数据的存储，不适合做关联查询")]),s._v("，类似JOIN等操作。\n(3) 基于HDFS\n"),a("strong",[s._v("数据持久化存储的体现形式是HFile，存放于DataNode中")]),s._v("，"),a("strong",[s._v("被ResionServer以region的形式进行管理。")]),s._v("\n(4) "),a("strong",[s._v("延迟较低，接入在线业务使用")]),s._v("\n面对大量的企业数据，HBase可以直线单表大量数据的存储，同时提供了高效的数据访问速度。")]),s._v(" "),a("h2",{attrs:{id:"hbase与hive集成使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase与hive集成使用"}},[s._v("#")]),s._v(" HBase与Hive集成使用")]),s._v(" "),a("p",[s._v("启动yarn 和 hive服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("start-yarn.sh\nhiveservices.sh start\nbeeline -u jdbc:hive2://hadoop102:10000 -n atguigu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"从hive映射到hbase上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从hive映射到hbase上"}},[s._v("#")]),s._v(" 从Hive映射到HBase上")]),s._v(" "),a("p",[s._v("建立Hive表，关联HBase表，插入数据到Hive表的同时能够影响HBase表")]),s._v(" "),a("p",[s._v("在Hive中创建表同时关联HBase")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" emp_hbase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nempno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nename string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\njob string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmgr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nhiredate string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nsal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ncomm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ndeptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSTORED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.hadoop.hive.hbase.HBaseStorageHandler'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" SERDEPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase.columns.mapping"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":key,info:ename,info:job,info:mgr,info:hiredate,info:sal,info:comm,info:deptno"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nTBLPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase.table.name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase_emp_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("从hbase中查看所有表 自动创建了映射表")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211125165349627.png",alt:"image-20211125165349627"}})]),s._v(" "),a("p",[s._v("hive中创建emp表并导入文本数据")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nempno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nename string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\njob string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmgr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nhiredate string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nsal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ncomm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ndeptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" format delimited "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("查询工资大于2000的数据插入到emp_hbase表中")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" emp_hbase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用hbase shell 查看 hbase_emp_table")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211125202323029.png",alt:"image-20211125202323029"}})]),s._v(" "),a("p",[s._v("将emp_hbase表映射Phoenix上")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase_emp_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ename"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"job"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mgr"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hiredate"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sal"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"comm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deptno"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase_emp_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211125203544974.png",alt:"image-20211125203544974"}})]),s._v(" "),a("h3",{attrs:{id:"从hbase映射到hive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从hbase映射到hive"}},[s._v("#")]),s._v(" 从HBase映射到Hive")]),s._v(" "),a("p",[s._v("在HBase中已经存储了某一张表hbase_emp_table，然后在Hive中创建一个外部表来关联HBase中的hbase_emp_table这张表，使之可以借助Hive来分析HBase这张表中的数据。")]),s._v(" "),a("p",[s._v("在Hive中创建外部表")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" EXTERNAL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" relevance_hbase_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nempno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nename string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\njob string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmgr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nhiredate string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nsal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ncomm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ndeptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSTORED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.hadoop.hive.hbase.HBaseStorageHandler'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" SERDEPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase.columns.mapping"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":key,info:ename,info:job,info:mgr,info:hiredate,info:sal,info:comm,info:deptno"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nTBLPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase.table.name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hbase_emp_table"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("关联后就可以使用Hive函数进行一些分析操作了")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" relevance_hbase_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211125204714344.png",alt:"image-20211125204714344"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);