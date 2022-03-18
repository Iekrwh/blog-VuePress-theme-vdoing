(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{773:function(e,t,n){"use strict";n.r(t);var a=n(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"flime基础架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flime基础架构"}},[e._v("#")]),e._v(" Flime基础架构")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211110194756079.png",alt:"image-20211110194756079"}})]),e._v(" "),n("h2",{attrs:{id:"agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#agent"}},[e._v("#")]),e._v(" Agent")]),e._v(" "),n("p",[e._v("Agent是一个"),n("strong",[e._v("JVM进程")]),e._v("，它以事件的形式将数据从源头送至目的。")]),e._v(" "),n("p",[e._v("Agent主要有3个部分组成，"),n("strong",[e._v("Source、Channel、Sink")]),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" Source")]),e._v(" "),n("p",[e._v("Source是负责"),n("strong",[e._v("接收数据")]),e._v("到Flume Agent的组件。Source组件可以处理各种类型、各种格式的日志数据，包括avro、thrift、exec、jms、spooling directory、netcat、sequence generator、syslog、http、legacy。")]),e._v(" "),n("h2",{attrs:{id:"sink"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sink"}},[e._v("#")]),e._v(" Sink")]),e._v(" "),n("p",[e._v("Sink不断地"),n("strong",[e._v("轮询Channel")]),e._v("中的事件且批量地"),n("strong",[e._v("移除")]),e._v("它们，并将这些事件批量写入到存储或索引系统、或者被发送到另一个Flume Agent。")]),e._v(" "),n("p",[e._v("Sink组件目的地包括hdfs、logger、avro、thrift、ipc、file、HBase、solr、自定义。")]),e._v(" "),n("h2",{attrs:{id:"channel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[e._v("#")]),e._v(" Channel")]),e._v(" "),n("p",[e._v("Channel是位于Source和Sink之间的"),n("strong",[e._v("缓冲区")]),e._v("。因此，Channel允许Source和Sink运作在不同的速率上。Channel是"),n("strong",[e._v("线程安全的")]),e._v("，"),n("strong",[e._v("可以同时处理几个Source的写入操作和几个Sink的读取操作")]),e._v("。")]),e._v(" "),n("p",[e._v("Flume自带两种Channel：Memory Channel和File Channel。")]),e._v(" "),n("p",[e._v("Memory Channel是"),n("strong",[e._v("内存")]),e._v("中的队列。Memory Channel在不需要关心数据丢失的情景下适用。如果需要关心数据丢失，那么Memory Channel就不应该使用，因为程序死亡、机器宕机或者重启都会导致"),n("strong",[e._v("数据丢失")]),e._v("。")]),e._v(" "),n("p",[e._v("File Channel将所有事件写到"),n("strong",[e._v("磁盘")]),e._v("。因此在程序关闭或机器宕机的情况下"),n("strong",[e._v("不会丢失数据")]),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[e._v("#")]),e._v(" Event")]),e._v(" "),n("p",[e._v("传输单元，"),n("strong",[e._v("Flume数据传输的基本单元")]),e._v("，以Event的形式将数据从源头送至目的地。Event由"),n("strong",[e._v("Header")]),e._v("和"),n("strong",[e._v("Body")]),e._v("两部分组成，Header用来存放该event的一些属性，为K-V结构，Body用来存放该条数据，形式为字节数组。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211110194954759.png",alt:"image-20211110194954759"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);