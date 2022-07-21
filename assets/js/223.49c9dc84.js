(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{553:function(s,a,n){"use strict";n.r(a);var e=n(3),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"flume-对接-kafka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume-对接-kafka"}},[s._v("#")]),s._v(" Flume 对接 Kafka")]),s._v(" "),a("p",[s._v("Flume输出到Kafka中")]),s._v(" "),a("p",[s._v("Flume配置文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("a2.sources "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r2\na2.sinks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" k2\na2.channels "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\n\na2.sources.r2.type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\na2.sources.r2.command "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -F /opt/module/flume/datas/123.log\na2.sources.r2.shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /bin/bash -C\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kafka Sink")]),s._v("\na2.sinks.k2.type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" org.apache.flume.source.kafka.KafkaSource\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送topic")]),s._v("\na2.sinks.k2.kafka.topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kafka地址")]),s._v("\na2.sinks.k2.kafka.bootstrap.servers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hadoop102:9092,hadoop103:9092,hadoop104:9092\na2.sinks.k2.kafka.flumeBatchSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ack模式")]),s._v("\na2.sinks.k2.kafka.producer.acks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" all\na2.sinks.k2.kafka.producer.linger.ms "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n\n\na2.channels.c2.type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" memory\na2.channels.c2.capacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\na2.channels.c2.transactionCapacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n\na2.sources.r2.channels "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\na2.sinks.k2.channel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("启动flume")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("flume-ng agent -n a2 -c conf/ -f datas/flume-taildir-hdfs.conf -Dflume.root.logger"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INFO,console\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时flume给我们提供了 kafka source 可以从kafka指定话题中读取数据到channel中")])])}),[],!1,null,null,null);a.default=t.exports}}]);