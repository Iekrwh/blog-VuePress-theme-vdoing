(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{781:function(a,t,r){"use strict";r.r(t);var e=r(15),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"kafka原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka原理"}},[a._v("#")]),a._v(" Kafka原理")]),a._v(" "),r("h2",{attrs:{id:"kafka-工作流程和文件存储机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka-工作流程和文件存储机制"}},[a._v("#")]),a._v(" Kafka 工作流程和文件存储机制")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211113185455788.png",alt:"image-20211113185455788"}})]),a._v(" "),r("p",[a._v("Kafka中消息是以"),r("strong",[a._v("topic")]),a._v("进行分类的，生产者生产消息，消费者消费消息，都是面向topic的。")]),a._v(" "),r("p",[a._v("topic是逻辑上的概念，而partition是物理上的概念，每个partition"),r("strong",[a._v("对应于一个log文件")]),a._v("，该log文件中存储的就是producer生产的数据。Producer生产的数据会被不断追加到该"),r("strong",[a._v("log文件末端")]),a._v("，且"),r("strong",[a._v("每条数据都有自己的offset")]),a._v("。消费者组中的每个消费者，都会"),r("strong",[a._v("实时记录自己消费到了哪个offset")]),a._v("，以便"),r("strong",[a._v("出错恢复时")]),a._v("，"),r("strong",[a._v("从上次的位置")]),a._v("继续消费。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211113185613355.png",alt:"image-20211113185613355"}})]),a._v(" "),r("p",[a._v("配置文件中 1个星期清除 之前的被切割的文件  1GB切割为1个文件")]),a._v(" "),r("p",[a._v("由于生产者生产的消息会不断追加到log文件末尾，为防止log文件过大导致数据定位效率低下，Kafka采取了"),r("strong",[a._v("分片")]),a._v("和"),r("strong",[a._v("索引")]),a._v("机制，将每个partition分为多个segment。每个segment对应两个文件——“.index”文件和“.log”文件。这些文件位于一个文件夹下，该文件夹的命名规则为：topic名称+分区序号。例如，first这个topic有三个分区，则其对应的文件夹为first-0,first-1,first-2。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211113203230573.png",alt:"image-20211113203230573"}})]),a._v(" "),r("h2",{attrs:{id:"kafka-生产者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka-生产者"}},[a._v("#")]),a._v(" Kafka 生产者")]),a._v(" "),r("h3",{attrs:{id:"分区策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分区策略"}},[a._v("#")]),a._v(" 分区策略")]),a._v(" "),r("ol",[r("li",[a._v("分区的原因\n"),r("ol",[r("li",[a._v("方便在集群中"),r("strong",[a._v("扩展")]),a._v("，每个Partition可以通过调整以适应它所在的机器，而一个topic又可以有多个Partition组成，因此整个集群就可以适应任意大小的数据了；")]),a._v(" "),r("li",[a._v("可以"),r("strong",[a._v("提高并发")]),a._v("，因为可以以Partition为单位读写了")])])]),a._v(" "),r("li",[a._v("分区的原则\n"),r("ol",[r("li",[r("strong",[a._v("指明 partition")]),a._v(" 的情况下，直接将指明的值直接作为 partiton 值；")]),a._v(" "),r("li",[a._v("没有指明 partition 值但有 key 的情况下，"),r("strong",[a._v("将 key 的 hash 值与 topic 的 partition 数进行取余得到 partition 值")]),a._v("；")]),a._v(" "),r("li",[a._v("既没有 partition 值又没有 key 值的情况下，"),r("strong",[a._v("第一次调用时随机生成一个整数（后面每次调用在这个整数上自增）")]),a._v("，"),r("strong",[a._v("将这个值与 topic 可用的 partition 总数取余得到 partition 值，也就是常说的 round-robin 算法")]),a._v("。")])])])]),a._v(" "),r("h3",{attrs:{id:"数据可靠性保证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据可靠性保证"}},[a._v("#")]),a._v(" 数据可靠性保证")]),a._v(" "),r("p",[a._v("为保证producer发送的数据，能可靠的发送到指定的topic，topic的每个partition收到producer发送的数据后，都需要向producer发送ack（acknowledgement确认收到），"),r("strong",[a._v("如果producer收到ack，就会进行下一轮的发送，否则重新发送数据。")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211120175154412.png",alt:"image-20211120175154412"}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211120175139137.png",alt:"image-20211120175139137"}})]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[a._v("方案")])]),a._v(" "),r("th",[r("strong",[a._v("优点")])]),a._v(" "),r("th",[r("strong",[a._v("缺点")])])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("半数以上完成同步，就发送ack")])]),a._v(" "),r("td",[a._v("延迟低")]),a._v(" "),r("td",[a._v("选举新的leader时，容忍n台节点的故障，需要2n+1个副本")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("全部完成同步，才发送ack")])]),a._v(" "),r("td",[a._v("选举新的leader时，容忍n台节点的故障，需要n+1个副本")]),a._v(" "),r("td",[a._v("延迟高")])])])]),a._v(" "),r("p",[a._v("Kafka选择了第二种方案 虽然第二种方案的网络延迟会比较高，但"),r("strong",[a._v("网络延迟对Kafka的影响较小")])]),a._v(" "),r("p",[a._v("同样为了容忍n台节点的故障，第一种方案需要2n+1个副本，而第二种方案只需要n+1个副本，而Kafka的每个分区都有大量的数据，第一种方案会造成"),r("strong",[a._v("大量数据的冗余")])]),a._v(" "),r("h4",{attrs:{id:"isr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isr"}},[a._v("#")]),a._v(" ISR")]),a._v(" "),r("p",[r("strong",[a._v("Leader")]),a._v("维护了一个动态的in-sync replica set (ISR)，意为和leader保持同步的follower集合。当ISR中的follower完成数据的同步之后，leader就会给producer发送ack。"),r("strong",[a._v("如果follower长时间未向leader同步数据，则该follower将被踢出ISR")]),a._v("，该时间阈值由"),r("strong",[a._v("replica.lag.time.max.ms")]),a._v("参数设定。Leader发生"),r("strong",[a._v("故障")]),a._v("之后，就会"),r("strong",[a._v("从ISR中选举新的leader")]),a._v("。")]),a._v(" "),r("h4",{attrs:{id:"故障处理细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障处理细节"}},[a._v("#")]),a._v(" 故障处理细节")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211113210933050.png",alt:"image-20211113210933050"}})]),a._v(" "),r("ol",[r("li",[a._v("follower故障\nfollower发生故障后会被"),r("strong",[a._v("临时踢出ISR")]),a._v("，待该follower"),r("strong",[a._v("恢复")]),a._v("后，follower会"),r("strong",[a._v("读取本地磁盘记录的上次的HW")]),a._v("，并将log文件"),r("strong",[a._v("高于HW")]),a._v("的"),r("strong",[a._v("部分截取掉")]),a._v("，从HW开始"),r("strong",[a._v("向leader进行同步")]),a._v("。等该follower的LEO大于等于该Partition的HW，"),r("strong",[a._v("即follower追上leader之后，就可以重新加入ISR了")]),a._v("。")]),a._v(" "),r("li",[a._v("leader故障\nleader发生故障之后，会从"),r("strong",[a._v("ISR")]),a._v("中"),r("strong",[a._v("选出一个新")]),a._v("的leader，之后，为保证多个副本之间的数据一致性，"),r("strong",[a._v("其余的follower会先将各自的log文件高于HW的部分截掉，然后从新的leader同步数据")]),a._v("。")])]),a._v(" "),r("p",[a._v("注意："),r("strong",[a._v("这只能保证副本之间的数据一致性，并不能保证数据不丢失或者不重复")]),a._v("。")]),a._v(" "),r("h4",{attrs:{id:"ack应答机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ack应答机制"}},[a._v("#")]),a._v(" ack应答机制")]),a._v(" "),r("p",[a._v("对于某些不太重要的数据，对数据的可靠性要求不是很高，能够容忍数据的少量丢失，所以没必要等ISR中的follower全部接收成功。")]),a._v(" "),r("p",[a._v("所以Kafka为用户提供了三种可靠性级别，用户根据对可靠性和延迟的要求进行权衡，选择以下的配置。")]),a._v(" "),r("p",[a._v("-1（all）：producer等待broker的ack，partition的leader和follower全部落盘成功后才返回ack。但是如果在follower同步完成后，broker发送ack之前，leader发生故障，那么会造成"),r("strong",[a._v("数据重复")]),a._v("。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211117163716242.png",alt:"image-20211117163716242"}})]),a._v(" "),r("p",[a._v("0：producer不等待broker的ack，这一操作提供了一个最低的延迟，broker一接收到还没有写入磁盘就已经返回，当broker故障时有可能"),r("strong",[a._v("丢失数据")]),a._v("；")]),a._v(" "),r("p",[a._v("1：producer等待broker的ack，partition的leader落盘成功后返回ack，如果在follower同步成功之前leader故障，那么将会"),r("strong",[a._v("丢失数据")]),a._v("；")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211117163745782.png",alt:"image-20211117163745782"}})]),a._v(" "),r("h3",{attrs:{id:"exactly-once语义-幂等性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exactly-once语义-幂等性"}},[a._v("#")]),a._v(" Exactly Once语义 (幂等性)")]),a._v(" "),r("p",[a._v("将服务器的ACK级别设置为**-1**，可以保证Producer到Server之间不会丢失数据，即"),r("strong",[a._v("At Least Once")]),a._v("语义。相对的，将服务器ACK级别设置为"),r("strong",[a._v("0")]),a._v("，可以保证生产者每条消息只会被发送一次，即"),r("strong",[a._v("At Most Once")]),a._v("语义。")]),a._v(" "),r("p",[a._v("At Least Once可以保证数据不丢失，但是不能保证数据不重复；相对的，At Least Once可以保证数据不重复，但是不能保证数据不丢失。但是，对于一些非常重要的信息，比如说交易数据，下游数据消费者要求数据既不重复也不丢失，即Exactly Once语义。")]),a._v(" "),r("p",[a._v("在0.11版本以前的Kafka，对于"),r("strong",[a._v("数据重复是无能为力")]),a._v("的，只能保证数据不丢失，再在下游消费者对数据做全局去重。对于多个下游应用的情况，每个都需要"),r("strong",[a._v("单独做全局去重")]),a._v("，这就对"),r("strong",[a._v("性能")]),a._v("造成了"),r("strong",[a._v("很大影响")]),a._v("。")]),a._v(" "),r("p",[a._v("0.11版本的Kafka，引入了一项重大特性："),r("strong",[a._v("幂等性")]),a._v("。所谓的幂等性就是**指Producer不论向Server发送多少次重复数据，Server端都只会持久化一条。**幂等性结合At Least Once语义，就构成了Kafka的Exactly Once语义。即：")]),a._v(" "),r("p",[a._v("At Least Once + 幂等性 = Exactly Once")]),a._v(" "),r("p",[a._v("要"),r("strong",[a._v("启用幂等性")]),a._v("，只需要将"),r("strong",[a._v("Producer的参数中enable.idompotence设置为true即可")]),a._v("。Kafka的幂等性实现其实就是"),r("strong",[a._v("将原来下游需要做的去重放在了数据上游")]),a._v("。开启幂等性的Producer在初始化的时候会被分配一个"),r("strong",[a._v("PID")]),a._v("，发往同一Partition的消息会附带Sequence Number。而Broker端会对**<PID, Partition, SeqNumber>"),r("strong",[a._v("做缓存，当具有")]),a._v("相同主键"),r("strong",[a._v("的消息提交时，Broker")]),a._v("只会持久化一条**。")]),a._v(" "),r("p",[a._v("但是"),r("strong",[a._v("PID重启就会变化")]),a._v("，同时不同的Partition也具有不同主键，所以"),r("strong",[a._v("幂等性无法保证跨分区跨会话的Exactly Once")]),a._v("。")]),a._v(" "),r("h2",{attrs:{id:"kafka-消费者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka-消费者"}},[a._v("#")]),a._v(" Kafka 消费者")]),a._v(" "),r("h3",{attrs:{id:"消费方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消费方式"}},[a._v("#")]),a._v(" 消费方式")]),a._v(" "),r("p",[a._v("consumer采用"),r("strong",[a._v("pull")]),a._v("（拉）模式从broker中读取数据。")]),a._v(" "),r("p",[r("strong",[a._v("push")]),a._v("（推）模式很难适应消费速率不同的消费者，因为消息发送速率是由broker决定的。它的目标是尽可能以最快速度传递消息，但是这样很"),r("strong",[a._v("容易造成consumer来不及处理消息")]),a._v("，典型的表现就是"),r("strong",[a._v("拒绝服务以及网络拥塞")]),a._v("。")]),a._v(" "),r("p",[a._v("而pull模式则可以根据consumer的消费能力以适当的速率消费消息。")]),a._v(" "),r("p",[a._v("pull模式不足之处是，"),r("strong",[a._v("如果kafka没有数据，消费者可能会陷入循环中，一直返回空数据")]),a._v("。")]),a._v(" "),r("p",[a._v("针对这一点，Kafka的"),r("strong",[a._v("消费者在消费数据时")]),a._v("会传入一个时长参数"),r("strong",[a._v("timeout")]),a._v("，如果当前没有数据可供消费，consumer会"),r("strong",[a._v("等待一段时间之后再返回")]),a._v("，这段时长即为timeout。")]),a._v(" "),r("h3",{attrs:{id:"分区分配策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分区分配策略"}},[a._v("#")]),a._v(" 分区分配策略")]),a._v(" "),r("p",[a._v("一个consumer group中有多个consumer，一个 topic有多个partition，所以必然会涉及到partition的分配问题，即确定那个partition由哪个consumer来消费。")]),a._v(" "),r("p",[a._v("Kafka有两种分配策略")]),a._v(" "),r("ol",[r("li",[a._v("roundrobin  轮询策略")]),a._v(" "),r("li",[a._v("range 随机分配")])]),a._v(" "),r("h3",{attrs:{id:"offset的维护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offset的维护"}},[a._v("#")]),a._v(" offset的维护")]),a._v(" "),r("p",[a._v("由于consumer在消费过程中可能会出现断电宕机等故障，consumer恢复后，需要从故障前的位置的继续消费，所以consumer需要"),r("strong",[a._v("实时记录自己消费到了哪个offset")]),a._v("，以便故障恢复后继续消费。")]),a._v(" "),r("p",[a._v("Kafka 0.9版本之前，consumer默认将offset保存在Zookeeper中，从0.9版本开始，consumer默认将"),r("strong",[a._v("offset保存在Kafka一个内置的topic中")]),a._v("，该topic为**__consumer_offsets**。")]),a._v(" "),r("h2",{attrs:{id:"kafka高效读写数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka高效读写数据"}},[a._v("#")]),a._v(" Kafka高效读写数据")]),a._v(" "),r("h3",{attrs:{id:"顺序写磁盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#顺序写磁盘"}},[a._v("#")]),a._v(" 顺序写磁盘")]),a._v(" "),r("p",[a._v("Kafka的producer生产数据，要写入到log文件中，写的过程是一直追加到文件末端，为顺序写。这与磁盘的机械机构有关，顺序写之所以快，是因为其省去了大量磁头寻址的时间。")]),a._v(" "),r("h3",{attrs:{id:"应用pagecache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用pagecache"}},[a._v("#")]),a._v(" 应用Pagecache")]),a._v(" "),r("p",[r("strong",[a._v("磁盘高速缓存（PageCache）")]),a._v(" Kafka数据持久化是直接持久化到Pagecache中")]),a._v(" "),r("ul",[r("li",[a._v("I/O Scheduler 会将连续的"),r("strong",[a._v("小块写组装成大块")]),a._v("的物理写从而提高性能")]),a._v(" "),r("li",[a._v("I/O Scheduler 会尝试将一些写操作"),r("strong",[a._v("重新按顺序排好")]),a._v("，从而减少磁盘头的移动时间")]),a._v(" "),r("li",[a._v("充分利用所有空闲内存（"),r("strong",[a._v("非 JVM 内存")]),a._v("）。如果使用应用层 Cache（即 JVM 堆内存），会增加 GC 负担")]),a._v(" "),r("li",[a._v("读操作可直接在 Page Cache 内进行。如果消费和生产速度相当，甚至"),r("strong",[a._v("不需要通过物理磁盘")]),a._v("（直接通过 Page Cache）交换数据")]),a._v(" "),r("li",[a._v("如果"),r("strong",[a._v("进程重启")]),a._v("，JVM 内的 Cache 会失效，但 "),r("strong",[a._v("Page Cache 仍然可用")])])]),a._v(" "),r("p",[a._v("尽管持久化到Pagecache上可能会造成宕机丢失数据的情况，但这可以被Kafka的Replication机制解决。如果为了保证这种情况下数据不丢失而强制将 Page Cache 中的数据 Flush 到磁盘，反而会降低性能。")]),a._v(" "),r("h3",{attrs:{id:"零拷贝"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#零拷贝"}},[a._v("#")]),a._v(" 零拷贝")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211117172851768.png",alt:"image-20211117172851768"}})]),a._v(" "),r("p",[a._v("从"),r("strong",[a._v("Page Cache")]),a._v("直接 写到NIC中 "),r("strong",[a._v("不经过应用层")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/v2-dc405f1eb057217aee8820b6d3e340fd_r.jpg",alt:"img"}})]),a._v(" "),r("p",[r("strong",[a._v("零拷贝（Zero-copy）技术，因为我们没有在内存层面去拷贝数据，也就是说全程没有通过 CPU 来搬运数据，所有的数据都是通过 DMA 来进行传输的。")])]),a._v(" "),r("p",[a._v("零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，"),r("strong",[a._v("只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。")])]),a._v(" "),r("p",[a._v("所以，总体来看，"),r("strong",[a._v("零拷贝技术可以把文件传输的性能提高至少一倍以上")]),a._v("。")]),a._v(" "),r("p",[a._v("事实上，Kafka 这个开源项目，就利用了「零拷贝」技术，从而大幅提升了 I/O 的吞吐率，这也是 Kafka 在处理海量数据为什么这么快的原因之一。")]),a._v(" "),r("p",[a._v("如果你追溯 Kafka 文件传输的代码，你会发现，最终它调用了 Java NIO 库里的 "),r("code",[a._v("transferTo")]),a._v(" 方法：")]),a._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Overridepublic")]),a._v(" \n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferFrom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileChannel")]),a._v(" fileChannel"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" position"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" count"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IOException")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" fileChannel"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferTo")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("position"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" count"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" socketChannel"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("p",[a._v("当然，要使用 sendfile，Linux 内核版本必须要 2.1 以上的版本。")]),a._v(" "),r("h2",{attrs:{id:"zookeeper在kafka的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper在kafka的作用"}},[a._v("#")]),a._v(" Zookeeper在Kafka的作用")]),a._v(" "),r("p",[a._v("Kafka集群中有一个broker会被选举为Controller，负责"),r("strong",[a._v("管理集群broker的上下线")]),a._v("，所有topic的"),r("strong",[a._v("分区副本分配")]),a._v("和"),r("strong",[a._v("leader选举")]),a._v("等工作。")]),a._v(" "),r("p",[a._v("Controller的管理工作都是依赖于Zookeeper的。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211117191006739.png",alt:"image-20211117191006739"}})]),a._v(" "),r("h2",{attrs:{id:"kafka事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka事务"}},[a._v("#")]),a._v(" Kafka事务")]),a._v(" "),r("p",[a._v("Kafka从0.11版本开始引入了事务支持。事务可以保证Kafka在Exactly Once语义的基础上，生产和消费可以跨分区和会话，要么全部成功，要么全部失败。")]),a._v(" "),r("h3",{attrs:{id:"producer事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#producer事务"}},[a._v("#")]),a._v(" Producer事务")]),a._v(" "),r("p",[a._v("为了实现跨分区跨会话的事务，需要引入一个"),r("strong",[a._v("全局唯一的Transaction ID")]),a._v("，并将Producer获得的PID和Transaction ID绑定。这样当Producer重启后就可以通过正在进行的Transaction ID获得原来的PID。")]),a._v(" "),r("p",[a._v("为了管理Transaction，Kafka引入了一个新的组件"),r("strong",[a._v("Transaction Coordinator")]),a._v("。Producer就是通过和Transaction Coordinator交互获得Transaction ID"),r("strong",[a._v("对应的任务状态")]),a._v("。Transaction Coordinator还负责将事务所有写入Kafka的一个内部Topic，这样即使整个服务重启，由于事务状态得到"),r("strong",[a._v("保存")]),a._v("，进行中的事务状态可以得到"),r("strong",[a._v("恢复")]),a._v("，从而"),r("strong",[a._v("继续进行")]),a._v("。")]),a._v(" "),r("h3",{attrs:{id:"consumer事务-精准一次性消费"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#consumer事务-精准一次性消费"}},[a._v("#")]),a._v(" Consumer事务（精准一次性消费）")]),a._v(" "),r("p",[a._v("上述事务机制主要是从Producer方面考虑，对于Consumer而言，事务的保证就会相对较弱，尤其时无法保证Commit的信息被精确消费。这是由于Consumer可以通过offset访问任意信息，而且不同的Segment File生命周期不同，同一事务的消息可能会出现重启后被删除的情况。")]),a._v(" "),r("p",[a._v("如果想完成Consumer端的精准一次性消费，"),r("strong",[a._v("那么需要kafka消费端将消费过程和提交offset过程做原子绑定")]),a._v("。此时我们需要将kafka的offset保存到支持事务的自定义介质中（比如mysql）。")])])}),[],!1,null,null,null);t.default=s.exports}}]);