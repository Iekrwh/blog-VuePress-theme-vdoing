# fiddler

抓包与接口测试



# 抓包

包: 数据包

抓包: 用特点的工具获取客户端与服务端发送和返回的数据包

获取接口的 方法、接口地址、传递参数、头部、返回内容

![image-20210529140117633](https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210529140117633.png)

# 抓包原理

![image-20210529140546535](https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210529140546535.png)

通过代理截取到请求返回的数据包



# 过滤

![image-20210529141129116](https://gitee.com/Iekrwh/md-images/raw/master/images/image-20210529141129116.png)

可以隐藏图片和connect请求



# 断点

拦截数据查看或修改

全局断点,所有的请求都拦截在本地不发送给服务器



局部断点: 

控制台中输入 bpu 请求地址   (请求前)

bpafter 请求地址   (请求后 服务器已经接收到数据了 返回数据的拦截在本地)



