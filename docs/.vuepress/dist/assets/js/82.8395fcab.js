(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{580:function(t,v,_){"use strict";_.r(v);var a=_(15),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"流程控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程控制"}},[t._v("#")]),t._v(" 流程控制")]),t._v(" "),_("h2",{attrs:{id:"顺序结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#顺序结构"}},[t._v("#")]),t._v(" 顺序结构")]),t._v(" "),_("p",[t._v("没有特定的语法结构，按照代码的编写顺序依次执行")]),t._v(" "),_("h2",{attrs:{id:"if语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#if语句"}},[t._v("#")]),t._v(" if语句")]),t._v(" "),_("p",[t._v("格式:")]),t._v(" "),_("p",[t._v("if(关系表达式){")]),t._v(" "),_("p",[t._v("​\t语句体;")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("关系表达式值为true就执行语句体")]),t._v(" "),_("p",[t._v("关系表达式值为false就不执行语句体，继续执行if语句后的语句")]),t._v(" "),_("p",[t._v("if 语句格式2")]),t._v(" "),_("p",[t._v("if(关系表达式){")]),t._v(" "),_("p",[t._v("​\t语句体;")]),t._v(" "),_("p",[t._v("} else {")]),t._v(" "),_("p",[t._v("​\t语句体2;")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("关系表达式值为true就执行语句体1")]),t._v(" "),_("p",[t._v("关系表达式值为false就执行语句体2")]),t._v(" "),_("p",[t._v("​\tif 语句格式3")]),t._v(" "),_("p",[t._v("​\tif(关系表达式1){")]),t._v(" "),_("p",[t._v("​\t语句体1;")]),t._v(" "),_("p",[t._v("} else if (关系表达式2){")]),t._v(" "),_("p",[t._v("​\t语句体2;")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("…")]),t._v(" "),_("p",[t._v("else{")]),t._v(" "),_("p",[t._v("​\t语句体n")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("首先计算关系表达式1的值")]),t._v(" "),_("p",[t._v("如为true则执行语句体1，如为false则判断关系表达式2，直到elseif全为false才执行else中的语句体")]),t._v(" "),_("h2",{attrs:{id:"switch语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#switch语句"}},[t._v("#")]),t._v(" switch语句")]),t._v(" "),_("p",[t._v("格式：")]),t._v(" "),_("p",[t._v("switch(表达式){")]),t._v(" "),_("p",[t._v("​\tcase 值1：")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\t语句体1；")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\tbreak；")]),t._v(" "),_("p",[t._v("​\tcase 值2：")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\t语句体1；")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\tbreak；")]),t._v(" "),_("p",[t._v("​\tcase 值n：")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\t语句体n；")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\tbreak；")]),t._v(" "),_("p",[t._v("…")]),t._v(" "),_("p",[t._v("default:")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\t语句体n+1;")]),t._v(" "),_("p",[t._v("​\t\t\t\t\t\t[break];")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("表达式:取值为byte、short、int、char，jdk5以后可以是枚举，jdk7以后可以是String。")]),t._v(" "),_("p",[t._v("case：后面跟的是要和表达式进行比较的值")]),t._v(" "),_("p",[t._v("break：表示中断/结束，用来结束switch语句")]),t._v(" "),_("p",[t._v("default：表示所有case都不匹配的时候执行该内容，跟else差不多")]),t._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5Ciekrw%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20201226111833868.png",alt:"image-20201226111833868"}})]),t._v(" "),_("h3",{attrs:{id:"case穿透"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#case穿透"}},[t._v("#")]),t._v(" case穿透")]),t._v(" "),_("p",[t._v("如果case的语句体后面不写break，将会出现穿透现象，在不判断下一个case值的情况下，继续往 下执行直到遇到break或者switc语句结束")]),t._v(" "),_("p",[t._v("如:")]),t._v(" "),_("p",[t._v("switch (n){")]),t._v(" "),_("p",[t._v("​\tcase 1:")]),t._v(" "),_("p",[t._v("​\tcase 2:")]),t._v(" "),_("p",[t._v("​\tcase 3:")]),t._v(" "),_("p",[t._v('​\tSystem.out.println("123");')]),t._v(" "),_("p",[t._v("​\tbreak;")]),t._v(" "),_("p",[t._v("}")]),t._v(" "),_("p",[t._v("如果case1成立则往下执行case2、case3里的语句体然后break结束")])])}),[],!1,null,null,null);v.default=e.exports}}]);