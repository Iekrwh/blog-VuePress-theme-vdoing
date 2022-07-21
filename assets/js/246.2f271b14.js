(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{575:function(a,t,r){"use strict";r.r(t);var e=r(3),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sparksql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sparksql"}},[a._v("#")]),a._v(" SparkSQL")]),a._v(" "),t("p",[a._v("Spark SQL是Spark用于结构化数据(structured data)处理的Spark模块。")]),a._v(" "),t("p",[a._v("与基本的Spark RDD API不同，Spark SQL的抽象数据类型为Spark提供了关于数据结构和正在执行的计算的更多信息。")]),a._v(" "),t("p",[a._v("我们已经学习了Hive，它是将Hive SQL转换成 MapReduce然后提交到集群上执行，大大简化了编写 MapReduce的程序的复杂性，由于MapReduce这种计算模型执行效率比较慢。所以Spark SQL的应运而生，它是将Spark SQL转换成RDD，然后提交到集群执行，执行效率非常快！")]),a._v(" "),t("p",[a._v("Spark SQL它提供了2个编程抽象，类似Spark Core中的RDD")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("DataFrame")])]),a._v(" "),t("li",[t("p",[a._v("DataSet")])])]),a._v(" "),t("p",[a._v("特点:")]),a._v(" "),t("ol",[t("li",[a._v("使用相同的方式连接不同的数据源")]),a._v(" "),t("li",[a._v("在已有的仓库上直接运行 SQL 或者 HiveQL")]),a._v(" "),t("li",[a._v("通过 JDBC 或者 ODBC 来连接")])]),a._v(" "),t("h2",{attrs:{id:"dataframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataframe"}},[a._v("#")]),a._v(" DataFrame")]),a._v(" "),t("p",[a._v("在Spark中，DataFrame是一种"),t("strong",[a._v("以RDD为基础的分布式数据集，类似于传统数据库中的二维表格")]),a._v("。")]),a._v(" "),t("p",[a._v("DataFrame与RDD的主要区别在于，"),t("strong",[a._v("前者带有schema元信息")]),a._v("，即DataFrame所表示的二维表数据集的每一列都带有名称和类型。这使得Spark SQL得以洞察更多的结构信息，从而对藏于DataFrame背后的数据源以及作用于DataFrame之上的变换进行了针对性的优化，最终达到大幅提升运行时效率的目标。反观RDD，由于无从得知所存数据元素的具体内部结构，Spark Core只能在stage层面进行简单、通用的流水线优化。")]),a._v(" "),t("p",[a._v("同时，与Hive类似，"),t("strong",[a._v("DataFrame也支持嵌套数据类型（struct、array和map）")]),a._v("。从 API 易用性的角度上看，DataFrame API提供的是一套高层的关系操作，比函数式的RDD API 要更加友好，门槛更低。"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211218210011429.png",alt:"image-20211218210011429"}})]),a._v(" "),t("p",[a._v("左侧的RDD[Person]虽然以Person为类型参数，但Spark框架本身不了解Person类的内部结构。而右侧的DataFrame却提供了详细的结构信息，使得 Spark SQL 可以清楚地知道该数据集中包含哪些列，每列的名称和类型各是什么。")]),a._v(" "),t("p",[a._v("DataFrame是为数据提供了Schema的视图。可以把它当做数据库中的一张表来对待")]),a._v(" "),t("p",[t("strong",[a._v("DataFrame也是懒执行的，但性能上比RDD要高")]),a._v("，主要原因：优化的执行计划，即查询计划通过Spark catalyst optimiser进行优化。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211218210453867.png",alt:"image-20211218210453867"}})]),a._v(" "),t("h2",{attrs:{id:"dataset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[a._v("#")]),a._v(" DataSet")]),a._v(" "),t("p",[a._v("DataSet是分布式数据集合。DataSet是Spark 1.6中添加的一个新抽象，"),t("strong",[a._v("是DataFrame的一个扩展")]),a._v("。它提供了RDD的优势（强类型，使用强大的lambda函数的能力）以及Spark SQL优化执行引擎的优点。DataSet也可以使用功能性的转换（操作map，flatMap，filter等等）。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211218211103016.png",alt:"image-20211218211103016"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);