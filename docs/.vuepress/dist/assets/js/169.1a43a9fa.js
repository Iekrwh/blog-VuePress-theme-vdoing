(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{670:function(t,e,a){"use strict";a.r(e);var l=a(15),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表"}},[t._v("#")]),t._v(" 表")]),t._v(" "),a("ul",[a("li",[t._v("查询表 show tables;")]),t._v(" "),a("li",[t._v("查询表结构 desc 表名;")]),t._v(" "),a("li",[t._v("查询表字符集 show table status from 库名 like '表名';")]),t._v(" "),a("li",[t._v("修改表名 clter table 表名 rename to 新表名;")]),t._v(" "),a("li",[t._v("修改表的字符集 alter table 表名 character set utf8;")]),t._v(" "),a("li",[t._v("单独添加一列   alter table 表名 add 列名 数据类型;")]),t._v(" "),a("li",[t._v("修改指定列类型  alter table 表名 modify 列名 新数据类型;")]),t._v(" "),a("li",[t._v("修改列名和数据类型  alter table 表名 change 列名 新列名 新数据类型;")]),t._v(" "),a("li",[t._v("删除某一列 alter table 表名 drop 列名;")]),t._v(" "),a("li",[t._v("删除表 drop table 表名;")]),t._v(" "),a("li",[t._v("删除判断 drop table if exists 表名;")])]),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("ul",[a("li",[t._v("int 整数型")]),t._v(" "),a("li",[t._v("douban 小数")]),t._v(" "),a("li",[t._v("date 日期类型 yyyy-MM-dd")]),t._v(" "),a("li",[t._v("datetime  日期时间类型 yyyy-MM-dd HH:mm:ss")]),t._v(" "),a("li",[t._v("timestamp  时间戳类型 yyyy-MM-dd HH:mm:ss   如果不赋值或赋值为null 则使用当前系统时间自动赋值")]),t._v(" "),a("li",[t._v("varchar(长度)   字符串类型")])]),t._v(" "),a("h2",{attrs:{id:"表数据操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表数据操作"}},[t._v("#")]),t._v(" 表数据操作")]),t._v(" "),a("ul",[a("li",[t._v("添加数据  insert into 表名(列名) values(值1,值2);")]),t._v(" "),a("li",[t._v("更新 update 表名 set 列名=值1,列名2=值2 where")]),t._v(" "),a("li",[t._v("删除表指定数据 delete from 表名 where")])]),t._v(" "),a("h2",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),a("ul",[a("li",[t._v("去重复 select distinct 列名1,列名2 from 表名;")]),t._v(" "),a("li",[t._v("四则运算 select 列名1*10 frome 表名;")]),t._v(" "),a("li",[t._v("起别名 select 列表 as 别名 from 表名;")]),t._v(" "),a("li",[t._v("判断null  ifnull(列名,替换的值)")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210815115520717.png",alt:"image-20210815115520717"}})])]),t._v(" "),a("h2",{attrs:{id:"集合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合函数"}},[t._v("#")]),t._v(" 集合函数")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210815115725340.png",alt:"image-20210815115725340"}})]),t._v(" "),a("p",[t._v("select 函数名(列名) from 表名 where")]),t._v(" "),a("h2",{attrs:{id:"排序查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序查询"}},[t._v("#")]),t._v(" 排序查询")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ORDER BY      select 列名 frome 表名 where order by 列名 排序方式,列名2 排序方式")]),t._v(" "),a("ul",[a("li",[t._v("ASC  升序  默认值  如果是多个条件 只有当判断值一样时才会执行第二个条件排序")]),t._v(" "),a("li",[t._v("DESC 降序")])])])]),t._v(" "),a("h2",{attrs:{id:"分组查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组查询"}},[t._v("#")]),t._v(" 分组查询")]),t._v(" "),a("ul",[a("li",[t._v("GROUP BY   select 列名 from 表名 group by 指定以什么分组的列名\n"),a("ul",[a("li",[t._v("分组前过滤 where")]),t._v(" "),a("li",[t._v("分组后过滤 having")])])])]),t._v(" "),a("h2",{attrs:{id:"分页查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页查询"}},[t._v("#")]),t._v(" 分页查询")]),t._v(" "),a("ul",[a("li",[t._v("LIMIT select 列名 from 表名 LIMIT 当前页,每页个数\n"),a("ul",[a("li",[t._v("当前页 = (当前页 - 1 ) * 每页个数")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);