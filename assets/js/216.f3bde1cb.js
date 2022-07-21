(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{547:function(e,n,v){"use strict";v.r(n);var t=v(3),r=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"面试题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[e._v("#")]),e._v(" 面试题")]),e._v(" "),n("h2",{attrs:{id:"你是如何实现flume数据传输的监控的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你是如何实现flume数据传输的监控的"}},[e._v("#")]),e._v(" 你是如何实现Flume数据传输的监控的")]),e._v(" "),n("p",[e._v("使用第三方框架Ganglia实时监控Flume。")]),e._v(" "),n("h2",{attrs:{id:"flume的source-sink-channel的作用-你们source是什么类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flume的source-sink-channel的作用-你们source是什么类型"}},[e._v("#")]),e._v(" Flume的Source，Sink，Channel的作用？你们Source是什么类型？")]),e._v(" "),n("p",[n("strong",[e._v("1")]),e._v("）作用")]),e._v(" "),n("p",[e._v("（1）Source组件是专门用来收集数据的，可以处理各种类型、各种格式的日志数据，包括avro、thrift、exec、jms、spooling directory、netcat、sequence generator、syslog、http、legacy")]),e._v(" "),n("p",[e._v("（2）Channel组件对采集到的数据进行缓存，可以存放在Memory或File中。")]),e._v(" "),n("p",[e._v("（3）Sink组件是用于把数据发送到目的地的组件，目的地包括Hdfs、Logger、avro、thrift、ipc、file、Hbase、solr、自定义。")]),e._v(" "),n("p",[n("strong",[e._v("2")]),e._v("）我公司采用的Source类型为：")]),e._v(" "),n("p",[e._v("（1）监控后台日志：exec")]),e._v(" "),n("p",[e._v("（2）监控后台产生日志的端口：netcat")]),e._v(" "),n("p",[e._v("Exec spooldir")]),e._v(" "),n("h2",{attrs:{id:"flume的channel-selectors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flume的channel-selectors"}},[e._v("#")]),e._v(" Flume的Channel Selectors")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211113131132323.png",alt:"image-20211113131132323"}})]),e._v(" "),n("h2",{attrs:{id:"flume参数调优"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flume参数调优"}},[e._v("#")]),e._v(" Flume参数调优")]),e._v(" "),n("p",[n("strong",[e._v("1")]),e._v("）Source")]),e._v(" "),n("p",[n("strong",[e._v("增加Source个")]),e._v("（使用Tair Dir Source时可增加FileGroups个数）可以"),n("strong",[e._v("增大Source的读取数据的能力")]),e._v("。例如：当某一个目录产生的文件过多时需要将这个文件目录"),n("strong",[e._v("拆分成多个文件目录")]),e._v("，同时配置好"),n("strong",[e._v("多个Source")]),e._v(" 以保证Source"),n("strong",[e._v("有足够的能力获取到新产生的数据")]),e._v("。")]),e._v(" "),n("p",[n("strong",[e._v("batchSize")]),e._v("参数决定Source一次批量运输到Channel的event"),n("strong",[e._v("条数")]),e._v("，适当"),n("strong",[e._v("调大")]),e._v("这个参数可以提高Source搬运Event到Channel时的"),n("strong",[e._v("性能")]),e._v("。")]),e._v(" "),n("p",[n("strong",[e._v("2")]),e._v("）Channel")]),e._v(" "),n("p",[e._v("type 选择memory的Channel的性能最好，但是如果Flume进程意外挂掉可能会丢失数据。type选择file时Channel的容错性更好，但是性能上会比memory channel差。")]),e._v(" "),n("p",[e._v("使用file Channel时dataDirs配置多个不同盘下的目录可以提高性能。")]),e._v(" "),n("p",[n("u",[e._v("Capacity 参数决定Channel可容纳最大的event条数。transactionCapacity 参数决定每次Source往channel里面写的最大event条数和每次Sink从channel里面读的最大event条数")]),e._v("。"),n("strong",[e._v("transactionCapacity需要大于Source和Sink的batchSize参数。")])]),e._v(" "),n("p",[n("strong",[e._v("3")]),e._v("）Sink")]),e._v(" "),n("p",[e._v("增加Sink的个数可以增加Sink消费event的能力。Sink也"),n("strong",[e._v("不是越多越好够用就行")]),e._v("，"),n("strong",[e._v("过多")]),e._v("的Sink会"),n("strong",[e._v("占用系统资源")]),e._v("，造成系统资源不必要的"),n("strong",[e._v("浪费")]),e._v("。")]),e._v(" "),n("p",[n("u",[e._v("batchSize参数决定Sink一次批量从Channel读取的event条数，适当调大这个参数可以提高Sink从Channel搬出event的性能。")])]),e._v(" "),n("h2",{attrs:{id:"flume采集数据会丢失吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flume采集数据会丢失吗"}},[e._v("#")]),e._v(" Flume采集数据会丢失吗?")]),e._v(" "),n("p",[e._v("根据Flume的架构原理，Flume是"),n("strong",[e._v("不可能丢失数据的")]),e._v("，其内部有完善的"),n("strong",[e._v("事务机制")]),e._v("，Source到Channel是"),n("strong",[e._v("事务性")]),e._v("的，Channel到Sink是"),n("strong",[e._v("事务性")]),e._v("的，因此"),n("strong",[e._v("这两个环节不会出现数据的丢失")]),e._v("，"),n("strong",[e._v("唯一可能")]),e._v("丢失数据的情况是"),n("strong",[e._v("Channel采用memoryChannel")]),e._v("，agent"),n("strong",[e._v("宕机")]),e._v("导致"),n("strong",[e._v("数据丢失")]),e._v("，或者Channel"),n("strong",[e._v("存储数据已满")]),e._v("，导致Source"),n("strong",[e._v("不再写入")]),e._v("，未写入的数据"),n("strong",[e._v("丢失")]),e._v("。")]),e._v(" "),n("p",[n("strong",[e._v("Flume不会丢失数据")]),e._v("，但是有可能造成数据的"),n("strong",[e._v("重复")]),e._v("，例如数据已经成功由Sink发出，但是没有接收到响应，Sink会"),n("strong",[e._v("再次发送数据")]),e._v("，此时可能会导致数据的"),n("strong",[e._v("重复")]),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"flume的事务机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flume的事务机制"}},[e._v("#")]),e._v(" Flume的事务机制")]),e._v(" "),n("p",[e._v("Flume的事务机制（类似数据库的事务机制）：Flume使用两个独立的事务分别负责从Soucrce到Channel，以及从Channel到Sink的事件传递。比如spooling directory source 为文件的每一行创建一个事件，一旦事务中所有的事件"),n("strong",[e._v("全部传递")]),e._v("到Channel且提交成功，那么Soucrce就将该文件"),n("strong",[e._v("标记为完成")]),e._v("。同理，事务以类似的方式处理从Channel到Sink的传递过程，如果因为某种原因使得事件无法记录，那么事务将会"),n("strong",[e._v("回滚")]),e._v("。且所有的事件都会"),n("strong",[e._v("保持到Channel中")]),e._v("，等待"),n("strong",[e._v("重新传递")]),e._v("。")])])}),[],!1,null,null,null);n.default=r.exports}}]);