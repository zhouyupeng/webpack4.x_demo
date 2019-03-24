### 2019年 03-24日更新
本文写于10月前，鉴于还有很多人用来学习，花了点时间更新了下。
### 更新如下 

 - 升级babel到目前最高版本
babel7 后来的版本舍弃了以前的babel-*-* 的命名方式，改成了 @babel/*-*
修改依赖和 .babelrc 文件后就能正常启动项目了。
参考 [https://segmentfault.com/a/1190000016458913](https://segmentfault.com/a/1190000016458913)
[https://www.jianshu.com/p/e21d19875fbb](https://www.jianshu.com/p/e21d19875fbb)
 - 删除extract-text-webpack-plugin，改用mini-css-extract-plugin
 

### 更新后报错

##### clean-webpack-plugin only accepts an options object

原因是clean-webpack-plugin插件更新版本后，new cleanWebpackPlugin(),里只能传一个对象参数了，配置地址[https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional](https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional)

### 以下是原文

### webpack4 demo
------
>webpack4 多入口，多页面项目构建案例。
#### npm install
```
npm install //或
cnpm install
```
### run
```
npm run dev //开发环境
npm run build //生产环境打包
```
文章介绍

### [点击前往](https://segmentfault.com/a/1190000014984842)


#### [没有服务器学习的童鞋可以看看腾讯云的 1核2G，1M带宽，50GB存储空间的云服务器，120一年哦。点击进入](https://cloud.tencent.com/redirect.php?redirect=10004&cps_key=5592217280c1059d781cd2563af77305)
