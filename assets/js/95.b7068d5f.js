(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{427:function(t,a,i){"use strict";i.r(a);var s=i(3),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("p",[t._v("事务:一条或者多条SQL语句组成一个执行单元,特点是要么同时成功要么同时失败,每条语句都相互依赖,形成一个整体,如果失败或者出现错误,那么状态会撤回到事务最初状态(回退)")]),t._v(" "),a("ul",[a("li",[t._v("开启事务  start transaction;   开启事务后所有的操作都是虚拟化的")]),t._v(" "),a("li",[t._v("回滚事务 rollback;    结束事务并回退")]),t._v(" "),a("li",[t._v("提交事务 commit;     结束事务并提交")])]),t._v(" "),a("h2",{attrs:{id:"提交方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交方式"}},[t._v("#")]),t._v(" 提交方式")]),t._v(" "),a("ul",[a("li",[t._v("自动提交    1   默认值")]),t._v(" "),a("li",[t._v("手动添加    0")]),t._v(" "),a("li",[t._v("查询事务提交方式  select @@autocommit;")]),t._v(" "),a("li",[t._v("修改事务提交方式 set @@autocommit=0;     1为自动提交   0为手动添加")])]),t._v(" "),a("p",[t._v("如果修改为手动提交 不开始事务 做增删改查 操作也需要commit操作才生效")]),t._v(" "),a("h2",{attrs:{id:"事务的四大特征-acid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的四大特征-acid"}},[t._v("#")]),t._v(" 事务的四大特征(ACID)")]),t._v(" "),a("ul",[a("li",[t._v("原子性（Atomicity）\n"),a("ul",[a("li",[t._v("指事务包含的所有操作要么全部成功,要么全部失败回滚\n因此事务的操作成功则要应用到数据，操作失败则不能对数据库有影响")])])]),t._v(" "),a("li",[t._v("一致性 （Consistency）\n"),a("ul",[a("li",[t._v("一致性指事务必须使数据库从一个一致性变化到另外一个一致性\n也就是说一个事务执行之前和执行之后都必须处于一个一致性")])])]),t._v(" "),a("li",[t._v("隔离性（isolcation）\n"),a("ul",[a("li",[t._v("隔离性是当多个用户并发访问数据库时，如操作同一张表时，数据库为每个用户开启事务\n不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。")])])]),t._v(" "),a("li",[t._v("持久性（durability）\n"),a("ul",[a("li",[t._v("持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的\n即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作")])])])]),t._v(" "),a("h2",{attrs:{id:"事务的隔离性级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的隔离性级别"}},[t._v("#")]),t._v(" 事务的隔离性级别")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20210818082853288.png",alt:"image-20210818082853288"}})]),t._v(" "),a("h3",{attrs:{id:"引发的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引发的问题"}},[t._v("#")]),t._v(" 引发的问题")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20210818083021964.png",alt:"image-20210818083021964"}})]),t._v(" "),a("ul",[a("li",[t._v("查询数据库隔离级别  select @@TX_ISOLATION;")]),t._v(" "),a("li",[t._v("修改数据库隔离级别 set global transaction isolation level 级别;  修改后需要重新连接数据库\n"),a("ul",[a("li",[t._v("REPEATABLE READ  默认级别")])])]),t._v(" "),a("li",[t._v("脏读   指的事务未被提交 另外一个事务已经可以查询到该事务的数据")]),t._v(" "),a("li",[t._v("不可重复读   指两个事务开启 其中一个事务已经提交了 另外一个事务读取到该事务的数据  正常来说应该是读取不到的,需要结束事务后才能读取")]),t._v(" "),a("li",[t._v("幻读  指查询某个数据不存在 但插入时无法无插入此数据,并且之后发现数据已经存在表中   或 某数据不存在 但执行删除操作 缺成功了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Iekrwh/images/md-images/image-20210818114307736.png",alt:"image-20210818114307736"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);