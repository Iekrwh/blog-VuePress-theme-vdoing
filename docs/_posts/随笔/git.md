---
title: git
date: 2022-03-19 15:31:48
permalink: /pages/b9cc16/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
## 设置用户名签名

```shell
git config -global user.name 用户名
```



## 设置用户邮箱签名

```shell
git config -global user.name 邮箱地址
```





## 初始化本地库

```shell
git init
```





## 查看本地库状态

```shell
git status
```





## 添加暂存区(追踪)


```shell

git add 文件名

#把当前目录加入到暂存区
git add .  
```



## 删除暂存区

```shell
git rm --cached 文件名
```

## 提交本地库

```shell
git commit -m "日志"  文件名
```



## 查看日志信息
```shell
git reflog
```

### 查看详细日志
```shell
git log
```



## 版本穿梭
```shell
git reset --hard 版本id
```



## 删除本地库的指定文件

```shell
#删除文件
git rm 文件名

#删除文件夹
git rm -r 文件夹名

#记得commit一下  如要删除远程库的重新push一下就好了
```



## 分支

### 查看当前分支 
```shell
git branch -v
```



### 创建分支
```shell
git branch 分支名
```



### 切换分支
```shell
git checkout 分支名
```



### 合并分支
```shell
git merge 分支名
```





### 解决冲突

```shell
#手动修改代码块

#添加暂存区 
 git add 文件名

#提交本地库 
git commit -m "日志"  (不需要文件名)

#合并分支只会修改当前分支,并不会修改其他分支
```







## github

### 创建别名
```shell
git remote add 别名 远程库地址
```

### 查看所有远程库别名
```shell
git remote -v
```

## 删除远程库

```shell
git remote remove 别名
```



## 修改别名的远程库地址

```shell
git remote set-url 别名 新的远程库地址
```



### 推送远程库
```shell
git push 别名(远程库地址) 分支名
```



### 拉取远程库
```shell
git pull 别名(远程库地址) 分支名
```



### 克隆到本地
```shell
git clone 远程库地址
```




### 生成ssh
```shell
ssh-keygen -t rsa -C 凭证邮箱
```

 

# github 推送

```shell
# 初始化本库
git init

# 把文件添加到暂存区
git add 文件夹(.为当前打开的目录)

# 把暂存区的文件提交到本地库
git commit -m 'first commit'

# 添加远程库起别名
git remote add 别名 github库连接

# 推送到远程库
git push -u 别名 master(分支名)

# 记住本次推送的配置 下一次可以直接 git push
git push -u 别名 分支
```



![img](https://gitee.com/Iekrwh/md-images/raw/master/images/src=http%253A%252F%252Fimg-blog.csdnimg.cn%252F20200310022116103.png%253Fx-oss-process%253Dimage%252Fwatermark%252Ctype_ZmFuZ3poZW5naGVpdGk%252Cshadow_10%252Ctext_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hsaHNvX3N6aA%253D%253D%252Csize_16%252Ccolor_FFFFFF%252Ct_70&refer=http%253A%252F%252Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto)



