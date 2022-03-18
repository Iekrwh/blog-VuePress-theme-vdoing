(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{746:function(e,t,a){"use strict";a.r(t);var r=a(15),m=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop企业优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop企业优化"}},[e._v("#")]),e._v(" Hadoop企业优化")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215254628.png",alt:"image-20211017215254628"}})]),e._v(" "),a("h2",{attrs:{id:"mapreduce优化方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce优化方法"}},[e._v("#")]),e._v(" MapReduce优化方法")]),e._v(" "),a("p",[e._v("MapReduce优化方法主要从六个方面考虑：数据输入、Map阶段、Reduce阶段、IO传输、数据倾斜问题和常用的调优参数。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215422102.png",alt:"image-20211017215422102"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215438983.png",alt:"image-20211017215438983"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215458129.png",alt:"image-20211017215458129"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215517321.png",alt:"image-20211017215517321"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215540493.png",alt:"image-20211017215540493"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215557358.png",alt:"image-20211017215557358"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017215620855.png",alt:"image-20211017215620855"}})]),e._v(" "),a("h2",{attrs:{id:"常用的调优参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的调优参数"}},[e._v("#")]),e._v(" 常用的调优参数")]),e._v(" "),a("p",[a("strong",[e._v("1")]),e._v("）资源相关参数")]),e._v(" "),a("p",[e._v("（1）以下参数是在用户自己的MR应用程序中配置就可以生效（mapred-default.xml）")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("配置参数")]),e._v(" "),a("th",[e._v("参数说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("mapreduce.map.memory.mb")]),e._v(" "),a("td",[e._v("一个MapTask可使用的资源上限（单位:MB），默认为1024。如果MapTask实际使用的资源量超过该值，则会被强制杀死。")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.memory.mb")]),e._v(" "),a("td",[e._v("一个ReduceTask可使用的资源上限（单位:MB），默认为1024。如果ReduceTask实际使用的资源量超过该值，则会被强制杀死。")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.map.cpu.vcores")]),e._v(" "),a("td",[e._v("每个MapTask可使用的最多cpu core数目，默认值: 1")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.cpu.vcores")]),e._v(" "),a("td",[e._v("每个ReduceTask可使用的最多cpu  core数目，默认值: 1")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.shuffle.parallelcopies")]),e._v(" "),a("td",[e._v("每个Reduce去Map中取数据的并行数。默认值是5")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.shuffle.merge.percent")]),e._v(" "),a("td",[e._v("Buffer中的数据达到多少比例开始写入磁盘。默认值0.66")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.shuffle.input.buffer.percent")]),e._v(" "),a("td",[e._v("Buffer大小占Reduce可用内存的比例。默认值0.7")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.input.buffer.percent")]),e._v(" "),a("td",[e._v("指定多少比例的内存用来存放Buffer中的数据，默认值是0.0")])])])]),e._v(" "),a("p",[e._v("（2）应该在YARN启动之前就配置在服务器的配置文件中才能生效（yarn-default.xml）")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("配置参数")]),e._v(" "),a("th",[e._v("参数说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("yarn.scheduler.minimum-allocation-mb")]),e._v(" "),a("td",[e._v("给应用程序Container分配的最小内存，默认值：1024")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.scheduler.maximum-allocation-mb")]),e._v(" "),a("td",[e._v("给应用程序Container分配的最大内存，默认值：8192")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.scheduler.minimum-allocation-vcores")]),e._v(" "),a("td",[e._v("每个Container申请的最小CPU核数，默认值：1")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.scheduler.maximum-allocation-vcores")]),e._v(" "),a("td",[e._v("每个Container申请的最大CPU核数，默认值：32")])]),e._v(" "),a("tr",[a("td",[e._v("yarn.nodemanager.resource.memory-mb")]),e._v(" "),a("td",[e._v("给Containers分配的最大物理内存，默认值：8192")])])])]),e._v(" "),a("p",[e._v("（3）Shuffle性能优化的关键参数，应在YARN启动之前就配置好（mapred-default.xml）")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("配置参数")]),e._v(" "),a("th",[e._v("参数说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("mapreduce.task.io.sort.mb")]),e._v(" "),a("td",[e._v("Shuffle的环形缓冲区大小，默认100m")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.map.sort.spill.percent")]),e._v(" "),a("td",[e._v("环形缓冲区溢出的阈值，默认80%")])])])]),e._v(" "),a("p",[a("strong",[e._v("2")]),e._v("）容错相关参数（MapReduce 性能优化）")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("配置参数")]),e._v(" "),a("th",[e._v("参数说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("mapreduce.map.maxattempts")]),e._v(" "),a("td",[e._v("每个Map Task最大重试次数，一旦重试参数超过该值，则认为Map Task运行失败，默认值：4。")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.reduce.maxattempts")]),e._v(" "),a("td",[e._v("每个Reduce Task最大重试次数，一旦重试参数超过该值，则认为Map Task运行失败，默认值：4。")])]),e._v(" "),a("tr",[a("td",[e._v("mapreduce.task.timeout")]),e._v(" "),a("td",[e._v("Task超时时间，经常需要设置的一个参数，该参数表达的意思为：如果一个Task在一定时间内没有任何进入，即不会读取新的数据，也没有输出数据，则认为该Task处于Block状态，可能是卡住了，也许永远会卡住，为了防止因为用户程序永远Block住不退出，则强制设置了一个该超时时间（单位毫秒），默认是600000。如果你的程序对每条输入数据的处理时间过长（比如会访问数据库，通过网络拉取数据等），建议将该参数调大，该参数过小常出现的错误提示是“AttemptID:attempt_14267829456721_123456_m_000224_0 Timed out after  300 secsContainer killed by the ApplicationMaster.”。")])])])]),e._v(" "),a("h2",{attrs:{id:"hdfs-小文件优化方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-小文件优化方法"}},[e._v("#")]),e._v(" HDFS 小文件优化方法")]),e._v(" "),a("p",[e._v("小文件的优化无非以下几种方式：")]),e._v(" "),a("ul",[a("li",[e._v("在数据采集的时候，就将小文件或小批数据合成大文件再上传HDFS。")]),e._v(" "),a("li",[e._v("在业务处理之前，在HDFS上使用MapReduce程序对小文件进行合并。")]),e._v(" "),a("li",[e._v("在MapReduce处理时，可采用CombineTextInputFormat提高效率。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017221215537.png",alt:"image-20211017221215537"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211017221222714.png",alt:"image-20211017221222714"}})])])}),[],!1,null,null,null);t.default=m.exports}}]);