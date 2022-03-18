(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{792:function(e,r,t){"use strict";t.r(r);var v=t(15),s=Object(v.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hbase原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase原理"}},[e._v("#")]),e._v(" Hbase原理")]),e._v(" "),t("h2",{attrs:{id:"架构原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构原理"}},[e._v("#")]),e._v(" 架构原理")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123094849599.png",alt:"image-20211123094849599"}})]),e._v(" "),t("ol",[t("li",[e._v("StoreFile\n"),t("strong",[e._v("保存实际数据的物理文件")]),e._v("，StoreFile以HFile的形式"),t("strong",[e._v("存储在HDFS上")]),e._v("。每个Store会有一个或多个StoreFile（HFile），数据在每个StoreFile中都是"),t("strong",[e._v("有序")]),e._v("的。")]),e._v(" "),t("li",[e._v("MemStore\n"),t("strong",[e._v("写缓存")]),e._v("，由于HFile中的数据要求是有序的，所以数据是先存储在MemStore中，"),t("strong",[e._v("排好序后")]),e._v("，等到达刷写时机才会刷写到"),t("strong",[e._v("HFile")]),e._v("，每次刷写都会形成一个新的HFile。")]),e._v(" "),t("li",[e._v("WAL\n由于数据要经MemStore排序后才能刷写到HFile，但把数据保存在内存中会有很高的概率导致数据"),t("strong",[e._v("丢失")]),e._v("，为了解决这个问题，数据会先写在一个叫做"),t("strong",[e._v("Write-Ahead logfile的文件中")]),e._v("，然后再写入MemStore中。所以在系统出现故障的时候，数据可以通过这个"),t("strong",[e._v("日志文件重建")]),e._v("。Hlog默认存储在HDFS上")])]),e._v(" "),t("h2",{attrs:{id:"写流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写流程"}},[e._v("#")]),e._v(" 写流程")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123100115202.png",alt:"image-20211123100115202"}})]),e._v(" "),t("ol",[t("li",[e._v("Client先访问zookeeper，"),t("strong",[e._v("获取hbase:meta表位于哪个Region Server")]),e._v("。")]),e._v(" "),t("li",[e._v("访问对应的Region Server，"),t("strong",[e._v("获取hbase:meta表")]),e._v("，根据读请求的namespace:table/"),t("strong",[e._v("rowkey")]),e._v("，"),t("strong",[e._v("查询出目标数据位于哪个Region Server中")]),e._v("的哪个Region中。并将该table的region信息以及"),t("strong",[e._v("meta表的位置信息缓存在客户端的meta cache")]),e._v("，方便下次访问。")]),e._v(" "),t("li",[e._v("与"),t("strong",[e._v("目标Region Server进行通讯")]),e._v("；")]),e._v(" "),t("li",[e._v("将数据"),t("strong",[e._v("顺序写入（追加）到WAL")]),e._v("；")]),e._v(" "),t("li",[e._v("将数据"),t("strong",[e._v("写入对应的MemStore")]),e._v("，数据会在MemStore进行排序；")]),e._v(" "),t("li",[e._v("向客户端"),t("strong",[e._v("发送ack")]),e._v("；")]),e._v(" "),t("li",[t("strong",[e._v("等达到MemStore的刷写时机后，将数据刷写到HFile。")])])]),e._v(" "),t("h2",{attrs:{id:"memstore-flush-刷新时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memstore-flush-刷新时机"}},[e._v("#")]),e._v(" MemStore Flush(刷新时机)")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123105052992.png",alt:"image-20211123105052992"}})]),e._v(" "),t("p",[e._v("MemStore刷写时机：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("当"),t("strong",[e._v("某个memstroe")]),e._v("的大小达到了"),t("strong",[e._v("hbase.hregion.memstore.flush.size")]),e._v("（默认值"),t("strong",[e._v("128M")]),e._v("），其所在region的"),t("strong",[e._v("所有memstore都会刷写")]),e._v("。\n"),t("strong",[e._v("当memstore的大小")]),e._v("达到了 hbase.hregion.memstore.flush.size（默认值"),t("strong",[e._v("128M")]),e._v("）* hbase.hregion.memstore.block.multiplier（默认值"),t("strong",[e._v("4")]),e._v("倍）时(即默认为"),t("strong",[e._v("128M*4=512MB")]),e._v(")，"),t("strong",[e._v("会阻止继续往该memstore写数据。")]),t("br"),e._v(" "),t("strong",[e._v("Hbase中不推荐创建太多了列族 由于刷写整个memstore都会刷写 而每次刷写都是在hdfs中建立新的文件 可能有store很小就被刷写了 浪费系统资源")])])]),e._v(" "),t("li",[t("p",[e._v("当"),t("strong",[e._v("region server中memstore的总大小")]),e._v("达到\njava_heapsize * hbase.regionserver.global.memstore.size（默认值0.4）* hbase.regionserver.global.memstore.size.upper.limit（默认值0.95），\nregion server 会把其的所有 region 按照其"),t("strong",[e._v("所有memstore的大小顺序")]),e._v("（由大到小）依次进行"),t("strong",[e._v("刷写")]),e._v("。直到region server中"),t("strong",[e._v("所有")]),e._v("memstore的"),t("strong",[e._v("总大小")]),e._v("减小到"),t("strong",[e._v("hbase.regionserver.global.memstore.size.lower.limit(默认为空 需要配置)以下")]),e._v("。\n当region server中memstore的总大小达到java_heapsize*hbase.regionserver.global.memstore.size（默认值0.4）时，"),t("strong",[e._v("会阻止继续往所有的memstore写数据")]),e._v("。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("到达自动刷写的时间")]),e._v("，也会触发memstore flush。自动刷新的时间间隔由该属性进行配置"),t("strong",[e._v("hbase.regionserver.optionalcacheflushinterval（默认1小时）")]),e._v("。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("当WAL文件的数量超过hbase.regionserver.max.logs")]),e._v("，region会按照"),t("strong",[e._v("时间顺序")]),e._v("依次进行刷写，直到WAL"),t("strong",[e._v("文件数量减小")]),e._v("到hbase.regionserver.max.log以下（"),t("strong",[e._v("该属性名已经废弃，现无需手动设置，最大值为32")]),e._v("）。")])])]),e._v(" "),t("h2",{attrs:{id:"读流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读流程"}},[e._v("#")]),e._v(" 读流程")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123112501947.png",alt:"image-20211123112501947"}})]),e._v(" "),t("p",[e._v("读流程")]),e._v(" "),t("ol",[t("li",[e._v("Client"),t("strong",[e._v("先访问zookeeper")]),e._v("，获取"),t("strong",[e._v("hbase:meta表位于哪个Region Server")]),e._v("。")]),e._v(" "),t("li",[t("strong",[e._v("访问对应的Region Server")]),e._v("，获取hbase:meta表，根据读请求的namespace:table/"),t("strong",[e._v("rowkey")]),e._v("，查询出目标数据位于哪个Region Server中的哪个"),t("strong",[e._v("Region")]),e._v("中。并将该table的"),t("strong",[e._v("region信息以及meta表的位置信息缓存")]),e._v("在客户端的meta cache，方便下次访问。")]),e._v(" "),t("li",[e._v("与"),t("strong",[e._v("目标Region Server进行通讯")]),e._v("；")]),e._v(" "),t("li",[e._v("分别在"),t("strong",[e._v("Block Cache（读缓存）")]),e._v("，"),t("strong",[e._v("MemStore和Store File（HFile）中查询目标数据")]),e._v("，"),t("strong",[e._v("并将查到的所有数据进行合并")]),e._v("。此处所有数据是指同一条数据的不同版本（time stamp）或者不同的类型（Put/Delete）。 "),t("strong",[e._v("先看缓存 再看MemStore 再看Store file")])]),e._v(" "),t("li",[e._v("将从文件中查询到的数据块（Block，HFile数据存储单元，默认大小为"),t("strong",[e._v("64KB")]),e._v("）"),t("strong",[e._v("缓存到Block Cache")]),e._v("。")]),e._v(" "),t("li",[e._v("将合并后的最终"),t("strong",[e._v("结果返回")]),e._v("给客户端。")])]),e._v(" "),t("h2",{attrs:{id:"storefile-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storefile-compaction"}},[e._v("#")]),e._v(" StoreFile Compaction")]),e._v(" "),t("p",[e._v("由于memstore每次刷写都会生成一个新的HFile，且同一个字段的不同版本（timestamp）和不同类型（Put/Delete）有可能会分布在不同的HFile中，因此查询时需要遍历所有的HFile。为了"),t("strong",[e._v("减少")]),e._v("HFile的个数，"),t("strong",[e._v("以及清理掉过期和删除的数据，会进行StoreFile Compaction")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123132901237.png",alt:"image-20211123132901237"}})]),e._v(" "),t("p",[e._v("Compaction分为两种，分别是Minor Compaction和Major Compaction。")]),e._v(" "),t("ol",[t("li",[e._v("Minor Compaction会将"),t("strong",[e._v("临近的若干个较小的HFile合并成一个较大的HFile")]),e._v("，但"),t("strong",[e._v("不会")]),e._v("清理过期和删除的数据。")]),e._v(" "),t("li",[e._v("Major Compaction会"),t("strong",[e._v("将一个Store下的所有的HFile合并成一个大HFile")]),e._v("，并且"),t("strong",[e._v("会")]),e._v("清理掉过期和删除的数据。")])]),e._v(" "),t("h2",{attrs:{id:"region-split"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#region-split"}},[e._v("#")]),e._v(" Region Split")]),e._v(" "),t("p",[e._v("默认情况下，每个Table起初"),t("strong",[e._v("只有一个Region")]),e._v("，随着数据的"),t("strong",[e._v("不断写入")]),e._v("，Region会"),t("strong",[e._v("自动进行拆分")]),e._v("。刚拆分时，"),t("strong",[e._v("两个子Region都位于当前的Region Server")]),e._v("，但处于"),t("strong",[e._v("负载均衡")]),e._v("的考虑，HMaster有可能会将"),t("strong",[e._v("某个Region转移给其他的Region Server")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20211123134140011.png",alt:"image-20211123134140011"}})]),e._v(" "),t("p",[e._v("Region Split时机：")]),e._v(" "),t("ol",[t("li",[e._v("当1个region中的某个Store下"),t("strong",[e._v("所有StoreFile的总大小超过hbase.hregion.max.filesize")]),e._v("(默认为10737418240 十GB大小)，该Region就会进行拆分（"),t("strong",[e._v("0.94版本之前")]),e._v("）。")]),e._v(" "),t("li",[e._v("当1个region中的某个Store下"),t("strong",[e._v('所有StoreFile的总大小超过Min(R^3 * 2 * "hbase.hregion.memstore.flush.size",hbase.hregion.max.filesize")')]),e._v("，该Region就会进行拆分，其中"),t("strong",[e._v("R为当前Region Server中属于该Table的个数")]),e._v("（0.94版本之后）。")]),e._v(" "),t("li",[e._v('Hbase 2.0 引入了新的split策略: 如果当前 RegionServer 上该表只有一个 Regin 按照 2 * "hbase.hregion.memstore.flush.size" 分裂，否则按照 hbase.hregion.max.filesize 分裂')])])])}),[],!1,null,null,null);r.default=s.exports}}]);