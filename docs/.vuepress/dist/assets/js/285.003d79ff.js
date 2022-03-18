(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{788:function(a,t,s){"use strict";s.r(t);var r=s(15),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka面试题"}},[a._v("#")]),a._v(" Kafka面试题")]),a._v(" "),s("h2",{attrs:{id:"kafka中的isr、ar又代表什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka中的isr、ar又代表什么"}},[a._v("#")]),a._v(" Kafka中的ISR、AR又代表什么？")]),a._v(" "),s("p",[a._v("ISR：与leader保持同步的follower集合")]),a._v(" "),s("p",[a._v("AR：分区的所有副本")]),a._v(" "),s("p",[a._v("OSR: 被暂时踢出ISR的副本 Out-of-Sync Replicas 脱离同步副本。 数据同步严重滞后的副本组成OSR（网络原因造成的等等）")]),a._v(" "),s("p",[a._v("AR = ISR + OSR")]),a._v(" "),s("h2",{attrs:{id:"kafka中的hw、leo等分别代表什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka中的hw、leo等分别代表什么"}},[a._v("#")]),a._v(" Kafka中的HW、LEO等分别代表什么？")]),a._v(" "),s("p",[a._v("LEO：每个副本的最后条消息的offset")]),a._v(" "),s("p",[a._v("HW：一个分区中所有副本最小的offset")]),a._v(" "),s("h2",{attrs:{id:"kafka中是怎么体现消息顺序性的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka中是怎么体现消息顺序性的"}},[a._v("#")]),a._v(" Kafka中是怎么体现消息顺序性的？")]),a._v(" "),s("p",[a._v("每个分区内，每条消息都有一个offset，故只能保证分区内有序。")]),a._v(" "),s("h2",{attrs:{id:"kafka中的分区器、序列化器、拦截器是否了解-它们之间的处理顺序是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka中的分区器、序列化器、拦截器是否了解-它们之间的处理顺序是什么"}},[a._v("#")]),a._v(" Kafka中的分区器、序列化器、拦截器是否了解？它们之间的处理顺序是什么？")]),a._v(" "),s("p",[a._v("拦截器 -> 序列化器 -> 分区器")]),a._v(" "),s("h2",{attrs:{id:"kafka生产者客户端的整体结构是什么样子的-使用了几个线程来处理-分别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka生产者客户端的整体结构是什么样子的-使用了几个线程来处理-分别是什么"}},[a._v("#")]),a._v(" Kafka生产者客户端的整体结构是什么样子的？使用了几个线程来处理？分别是什么？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211117202942736.png",alt:"image-20211117202942736"}})]),a._v(" "),s("h2",{attrs:{id:"消费组中的消费者个数如果超过topic的分区-那么就会有消费者消费不到数据-这句话是否正确"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消费组中的消费者个数如果超过topic的分区-那么就会有消费者消费不到数据-这句话是否正确"}},[a._v("#")]),a._v(" “消费组中的消费者个数如果超过topic的分区，那么就会有消费者消费不到数据”这句话是否正确？")]),a._v(" "),s("p",[a._v("正确")]),a._v(" "),s("h2",{attrs:{id:"消费者提交消费位移时提交的是当前消费到的最新消息的offset还是offset-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消费者提交消费位移时提交的是当前消费到的最新消息的offset还是offset-1"}},[a._v("#")]),a._v(" 消费者提交消费位移时提交的是当前消费到的最新消息的offset还是offset+1？")]),a._v(" "),s("p",[a._v("offset+1")]),a._v(" "),s("h2",{attrs:{id:"有哪些情形会造成重复消费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些情形会造成重复消费"}},[a._v("#")]),a._v(" 有哪些情形会造成重复消费？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211118144732895.png",alt:"image-20211118144732895"}})]),a._v(" "),s("h2",{attrs:{id:"那些情景会造成消息漏消费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那些情景会造成消息漏消费"}},[a._v("#")]),a._v(" 那些情景会造成消息漏消费？")]),a._v(" "),s("p",[a._v("先提交offset，后消费，有可能造成数据的重复")]),a._v(" "),s("h2",{attrs:{id:"当你使用kafka-topics-sh创建-删除-了一个topic之后-kafka背后会执行什么逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当你使用kafka-topics-sh创建-删除-了一个topic之后-kafka背后会执行什么逻辑"}},[a._v("#")]),a._v(" 当你使用kafka-topics.sh创建（删除）了一个topic之后，Kafka背后会执行什么逻辑？")]),a._v(" "),s("p",[a._v("1）会在zookeeper中的/brokers/topics节点下创建一个新的topic节点，如：/brokers/topics/first")]),a._v(" "),s("p",[a._v("2）触发Controller的监听程序")]),a._v(" "),s("p",[a._v("3）kafka Controller 负责topic的创建工作，并更新metadata cache")]),a._v(" "),s("h2",{attrs:{id:"topic的分区数可不可以增加-如果可以怎么增加-如果不可以-那又是为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic的分区数可不可以增加-如果可以怎么增加-如果不可以-那又是为什么"}},[a._v("#")]),a._v(" topic的分区数可不可以增加？如果可以怎么增加？如果不可以，那又是为什么？")]),a._v(" "),s("p",[a._v("可以增加")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("kafka-topics.sh --zookeeper localhost:2181/kafka --alter --topic topic-config --partitions "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"topic的分区数可不可以减少-如果可以怎么减少-如果不可以-那又是为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic的分区数可不可以减少-如果可以怎么减少-如果不可以-那又是为什么"}},[a._v("#")]),a._v(" topic的分区数可不可以减少？如果可以怎么减少？如果不可以，那又是为什么？")]),a._v(" "),s("p",[a._v("不可以减少，被删除的分区数据难以处理。")]),a._v(" "),s("h2",{attrs:{id:"kafka有内部的topic吗-如果有是什么-有什么所用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka有内部的topic吗-如果有是什么-有什么所用"}},[a._v("#")]),a._v(" Kafka有内部的topic吗？如果有是什么？有什么所用？")]),a._v(" "),s("p",[a._v("__consumer_offsets,保存消费者offset")]),a._v(" "),s("h2",{attrs:{id:"kafka分区分配的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka分区分配的概念"}},[a._v("#")]),a._v(" Kafka分区分配的概念？")]),a._v(" "),s("p",[a._v("一个topic多个分区，一个消费者组多个消费者，故需要将分区分配个消费者(roundrobin、range)")]),a._v(" "),s("h2",{attrs:{id:"简述kafka的日志目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述kafka的日志目录结构"}},[a._v("#")]),a._v(" 简述Kafka的日志目录结构？")]),a._v(" "),s("p",[a._v("每个分区对应一个文件夹，文件夹的命名为topic-0，topic-1，内部为.log和.index文件")]),a._v(" "),s("h2",{attrs:{id:"如果我指定了一个offset-kafka-controller怎么查找到对应的消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果我指定了一个offset-kafka-controller怎么查找到对应的消息"}},[a._v("#")]),a._v(" 如果我指定了一个offset，Kafka Controller怎么查找到对应的消息？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211113203230573.png",alt:"image-20211113203230573"}})]),a._v(" "),s("h2",{attrs:{id:"聊一聊kafka-controller的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊一聊kafka-controller的作用"}},[a._v("#")]),a._v(" 聊一聊Kafka Controller的作用？")]),a._v(" "),s("p",[a._v("负责管理集群broker的上下线，所有topic的分区副本分配和leader选举等工作。")]),a._v(" "),s("h2",{attrs:{id:"kafka中有那些地方需要选举-这些地方的选举策略又有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka中有那些地方需要选举-这些地方的选举策略又有哪些"}},[a._v("#")]),a._v(" Kafka中有那些地方需要选举？这些地方的选举策略又有哪些？")]),a._v(" "),s("p",[a._v("partition leader（ISR），controller（先到先得）")]),a._v(" "),s("h2",{attrs:{id:"失效副本是指什么-有那些应对措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#失效副本是指什么-有那些应对措施"}},[a._v("#")]),a._v(" 失效副本是指什么？有那些应对措施？")]),a._v(" "),s("p",[a._v("不能及时与leader同步，暂时踢出ISR，等其追上leader之后再重新加入")]),a._v(" "),s("h2",{attrs:{id:"kafka的那些设计让它有如此高的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka的那些设计让它有如此高的性能"}},[a._v("#")]),a._v(" Kafka的那些设计让它有如此高的性能？")]),a._v(" "),s("p",[a._v("分区，顺序写磁盘，0-copy")])])}),[],!1,null,null,null);t.default=e.exports}}]);