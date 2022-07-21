(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{562:function(e,a,t){"use strict";t.r(a);var s=t(3),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hbase数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase数据模型"}},[e._v("#")]),e._v(" Hbase数据模型")]),e._v(" "),a("p",[e._v("逻辑上，HBase的数据模型同关系型数据库很类似，数据存储在一张表中，有行有列。但从HBase的底层物理存储结构（K-V）来看，HBase更像是一个multi-dimensional map。")]),e._v(" "),a("h2",{attrs:{id:"逻辑结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑结构"}},[e._v("#")]),e._v(" 逻辑结构")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211015232241270.png",alt:"image-20211015232241270"}})]),e._v(" "),a("h2",{attrs:{id:"物理结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理结构"}},[e._v("#")]),e._v(" 物理结构")]),e._v(" "),a("p",[e._v("一个store存储模型")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211015232746761.png",alt:"image-20211015232746761"}})]),e._v(" "),a("p",[e._v("它是一个多维度的映射模型,一个rowkey对应着多个列名 映射到一个value上 如有多相同rowkey和列映射多值 则以timestamp最新的为准")]),e._v(" "),a("h2",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[e._v("#")]),e._v(" 数据模型")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Name Space")]),e._v(" "),a("p",[e._v("命名空间，类似于关系型数据库的DatabBase概念")])]),e._v(" "),a("li",[a("p",[e._v("Region")]),e._v(" "),a("p",[e._v("类似于关系型数据库的表概念。不同的是，HBase定义表时只需要声明列族即可，不需要声明具体的列。往HBase写入数据时，字段可以动态、按需指定")])]),e._v(" "),a("li",[a("p",[e._v("Row")]),e._v(" "),a("p",[e._v("HBase表中的每行数据都由一个"),a("strong",[e._v("RowKey")]),e._v("和多个"),a("strong",[e._v("Column")]),e._v("（列）组成，数据是按照RowKey的字典顺序存储的，并且查询数据时只能根据RowKey进行检索，所以RowKey的设计十分重要。")])]),e._v(" "),a("li",[a("p",[e._v("Column")]),e._v(" "),a("p",[e._v("HBase中的每个列都由**Column Family(列族)和Column Qualifier（列限定符）**进行限定")])]),e._v(" "),a("li",[a("p",[e._v("Time Stamp\n用于标识数据的不同版本（version），每条数据写入时，如果不指定"),a("strong",[e._v("时间戳")]),e._v("，系统会自动为其加上该字段，其值为写入HBase的时间。")])]),e._v(" "),a("li",[a("p",[e._v("Cell\n由**{rowkey, column Family：column Qualifier, time Stamp} 唯一确定的单元**。cell中的数据是没有类型的，全部是字节数组形式存贮。")])])]),e._v(" "),a("h2",{attrs:{id:"基本架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本架构"}},[e._v("#")]),e._v(" 基本架构")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20211015234550353.png",alt:"image-20211015234550353"}})]),e._v(" "),a("p",[e._v("架构角色")]),e._v(" "),a("ol",[a("li",[e._v("Region Server\nRegion Server为 Region的管理者，其实现类为HRegionServer，主要作用如下:\n对于数据的操作：get, put, delete；\n对于Region的操作：splitRegion、compactRegion。")]),e._v(" "),a("li",[e._v("Master\nMaster是所有Region Server的管理者，其实现类为HMaster，主要作用如下：\n对于表的操作：create, delete, alter\n对于RegionServer的操作：分配regions到每个RegionServer，监控每个RegionServer的状态，负载均衡和故障转移。")]),e._v(" "),a("li",[e._v("Zookeeper\nHBase通过Zookeeper来做Master的高可用、RegionServer的监控、元数据的入口以及集群配置的维护等工作。")]),e._v(" "),a("li",[e._v("HDFS\nHDFS为HBase提供最终的底层数据存储服务，同时为HBase提供高可用的支持。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);