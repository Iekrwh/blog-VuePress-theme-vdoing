(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{785:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/module/azkaban\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/software\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf azkaban-web-server-2.5.0.tar.gz -C /opt/module/azkaban/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf azkaban-executor-server-2.5.0.tar.gz -C /opt/module/azkaban/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf azkaban-sql-script-2.5.0.tar.gz -C /opt/module/azkaban/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/azkaban/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" azkaban-web-2.5.0/ server\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" azkaban-executor-2.5.0/ executor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"导入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入数据库"}},[s._v("#")]),s._v(" 导入数据库")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pA373213257s\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" azkaban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" azkaban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("azkaban"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("azkaban"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"创建ssl配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建ssl配置"}},[s._v("#")]),s._v(" 创建SSL配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" server/\nkeytool -keystore keystore -alias jetty -genkey -keyalg RSA\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码设置为123456 其他全部回车 只有否那里输入y确认")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("date 确保linux为东八区(CST-8)时间 并集群之间时间同步")]),s._v(" "),t("h2",{attrs:{id:"配置文件修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件修改"}},[s._v("#")]),s._v(" 配置文件修改")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/azkaban/server/conf/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" azkaban.properties\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改地区 mysql地址 账号密码 和ssl密码")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Azkaban Personalization Settings")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("Test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器UI名称,用于服务器上方显示的名字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.label")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("My Local Azkaban")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#描述")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("#FF3601")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#UI颜色")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.default.servlet.path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/index")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("web.resource.dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("web/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认根web目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("default.timezone.id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("Asia/Shanghai")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认时区,已改为亚洲/上海 默认为美国")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Azkaban UserManager class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("user.manager.class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("azkaban.user.XmlUserManager")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户权限管理默认类")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("user.manager.xml.file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("conf/azkaban-users.xml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户配置,具体配置参加下文")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Loader for projects")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.global.properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("conf/global.properties")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global配置文件所在位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.project.dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("projects")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("database.type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#端口号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("hadoop102")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库连接IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("azkaban")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库实例名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("A373213257s")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.numconnections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最大连接数")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Velocity dev mode")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("velocity.dev.mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jetty服务器属性.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.maxThreads")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("25")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#最大线程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.ssl.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8443")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Jetty SSL端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8081")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Jetty端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.keystore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("keystore")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL文件密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.keypassword")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Jetty主密码 与 keystore文件相同")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.truststore")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("keystore")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("jetty.trustpassword")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("123456")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSL文件密码")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行服务器属性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("12321")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行服务器端口")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mail.sender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("xxxxxxxx@163.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送邮箱")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mail.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("smtp.163.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送邮箱smtp地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mail.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("xxxxxxxx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送邮件时显示的名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mail.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("**********")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#邮箱密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("job.failure.email")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("xxxxxxxx@163.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#任务失败时发送邮件的地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("job.success.email")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("xxxxxxxx@163.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#任务成功时发送邮件的地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lockdown.create.projects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("cache.directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("cache")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#缓存目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br")])]),t("p",[s._v("修改 azkaban-users.xml 添加管理员用户")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" azkaban-users.xml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("azkaban-users")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("azkaban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("azkaban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("roles")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("groups")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("azkaban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("roles")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 添加以下这行 --\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("roles")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("admin,metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("role")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("ADMIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("role")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("METRICS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("azkaban-users")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("修改 执行服务器配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/azkaban/executor/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" azkaban.properties\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改时区 mysql 地址 账号密码")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Azkaban")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("default.timezone.id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("Asia/Shanghai                                              ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时区")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Azkaban JobTypes 插件配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.jobtype.plugin.dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("plugins/jobtypes                   ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobtype 插件所在位置")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Loader for projects")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.global.properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("conf/global.properties")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("azkaban.project.dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("projects")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("database.type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql                                                                       ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库类型(目前只支持mysql)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("3306                                                                                ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("hadoop102                                                           ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库IP地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.database")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("azkaban                                                                ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库实例名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root                                                                         ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("A373213257s                                                                   ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mysql.numconnections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大连接数")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行服务器配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.maxThreads")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("50 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大线程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("12321")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口号(如修改,请与web服务中一致)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("executor.flow.threads")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("30 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 线程数")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("启动 执行服务器实战")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/azkaban/executor\n/bin/azkaban-executor-start.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/azkaban/server/\nbin/azkaban-web-start.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("访问 https://hadoop102:8443/  不要用http连接 账号密码admin")])])}),[],!1,null,null,null);a.default=e.exports}}]);