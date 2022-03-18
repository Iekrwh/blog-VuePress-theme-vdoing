(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{587:function(v,_,t){"use strict";t.r(_);var a=t(15),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[v._v("#")]),v._v(" 数组")]),v._v(" "),t("p",[v._v("数组(array)是一种用于存储多个相同类型数据的存储模型")]),v._v(" "),t("h2",{attrs:{id:"格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[v._v("#")]),v._v(" 格式")]),v._v(" "),t("p",[v._v("数据类型[] 变量名 \t\t如:int[] arr")]),v._v(" "),t("p",[v._v("定义了一个int类型的数组，数组名是arr")]),v._v(" "),t("p",[v._v("数据类型\t变量名[]\t  如:int arr[]")]),v._v(" "),t("p",[v._v("定义了一个int类型的变量，变量名是arr数组")]),v._v(" "),t("h2",{attrs:{id:"数组初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组初始化"}},[v._v("#")]),v._v(" 数组初始化")]),v._v(" "),t("p",[v._v("java中的数组必须先初始化，然后才能使用")]),v._v(" "),t("p",[v._v("所谓初始化：就是为数组中的数组元素分配内存空间，并为每个数组元素赋值")]),v._v(" "),t("h2",{attrs:{id:"动态初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态初始化"}},[v._v("#")]),v._v(" 动态初始化")]),v._v(" "),t("p",[v._v("初始化时只指定数组长度，由系统为数组分配初始值，默认值为0")]),v._v(" "),t("p",[v._v("格式：")]),v._v(" "),t("p",[v._v("数据类型[] 变量名 = new 数据类型[数组长度];")]),v._v(" "),t("p",[v._v("int[]\tarr\t=\tnew\tint[3];")]),v._v(" "),t("h2",{attrs:{id:"数组元素访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组元素访问"}},[v._v("#")]),v._v(" 数组元素访问")]),v._v(" "),t("p",[v._v("数组变量访问方式")]),v._v(" "),t("p",[v._v("格式:数组名")]),v._v(" "),t("p",[v._v("数组内容保存的数据的访问方式")]),v._v(" "),t("p",[v._v("格式:数组名[索引]")]),v._v(" "),t("p",[v._v("索引是数组中数据的编号（下标）")]),v._v(" "),t("h2",{attrs:{id:"内存分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分配"}},[v._v("#")]),v._v(" 内存分配")]),v._v(" "),t("p",[v._v("数组在初始化时，会为存储空间添加默认值")]),v._v(" "),t("p",[v._v("整数：默认值0")]),v._v(" "),t("p",[v._v("浮点数：默认值0.0")]),v._v(" "),t("p",[v._v("布尔值：false")]),v._v(" "),t("p",[v._v("字符串：默认为空字符")]),v._v(" "),t("p",[v._v("引用数据类型：默认值是null")]),v._v(" "),t("p",[v._v("栈内存：存储局部变量")]),v._v(" "),t("p",[v._v("即定义在方法中的变量，例如：arr\t\t使用完毕，立即消失")]),v._v(" "),t("p",[v._v("堆内存：存储new出来的内容(实体，对象)")]),v._v(" "),t("p",[v._v("数组在初始化时，会为存储空间添加默认值")]),v._v(" "),t("p",[v._v("每个new出来的东西都有一个地址值，使用完毕，会在垃圾回收器空闲时被回收")]),v._v(" "),t("h2",{attrs:{id:"静态初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态初始化"}},[v._v("#")]),v._v(" 静态初始化")]),v._v(" "),t("p",[v._v("初始化时指定每个数组元素的初始值，由系统决定数组长度")]),v._v(" "),t("p",[v._v("格式:数据类型[] 变量名 =new 数据类型[]{数据1，数据2，…};")]),v._v(" "),t("p",[v._v("int[]\tarr = new\tint[]{1,2,3}")]),v._v(" "),t("p",[v._v("简化格式:数据类型[]变量名 ={数据1，数据2，…};")]),v._v(" "),t("p",[v._v("int[] arr ={1,2,3}")]),v._v(" "),t("h2",{attrs:{id:"数据操作中的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据操作中的注意事项"}},[v._v("#")]),v._v(" 数据操作中的注意事项")]),v._v(" "),t("ol",[t("li",[v._v("索引越界\t即下标超长数组的长度")]),v._v(" "),t("li",[v._v("空指针异常   访问的数组已经不再指向堆内存的数据，造成空指针异常          即修改了原arr的内存为null，null为空值，为引用数据类型的默认值，表示不指向任何有效对象")])]),v._v(" "),t("h2",{attrs:{id:"获取数组元素数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取数组元素数量"}},[v._v("#")]),v._v(" 获取数组元素数量")]),v._v(" "),t("p",[v._v("格式：数组名.length")]),v._v(" "),t("p",[v._v("如 arr.length")]),v._v(" "),t("p",[v._v("获取的是元素数量")]),v._v(" "),t("h2",{attrs:{id:"获取最值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取最值"}},[v._v("#")]),v._v(" 获取最值")]),v._v(" "),t("p",[v._v("使用遍历和if语句来实现")]),v._v(" "),t("p",[v._v("定义一个缓存变量起始值为数组的第0个，因为数组遍历从第0个开始遍历")]),v._v(" "),t("p",[v._v("if 判断循环遍历的元素进行 比较运算 符合条件则赋值给缓存变量")]),v._v(" "),t("p",[v._v("循环一直到结束，输出缓存变量")])])}),[],!1,null,null,null);_.default=r.exports}}]);