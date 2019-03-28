### 2019年 03-28日更新
 - 增加 npm run c page 命令，page代表页面的命名，执行后会在/src/pages/目录下自动创建page文件夹，并且在page文件夹里创建index.html，index.js ，index.scss
 - 增加动态添加入口，自动化配置页面
 
### 2019年 03-24日更新
### 更新如下 
 - 所有插件升级到当前最高版本（2019-03-24）
 - 升级babel到目前最高版本后
babel7 后来的版本舍弃了以前的 babel-*-* 的命名方式，改成了 @babel/*-*
修改依赖和 .babelrc 文件后就能正常启动项目了，[文档](https://babeljs.io/docs/en/v7-migration)。
参考 [https://segmentfault.com/a/1190000016458913](https://segmentfault.com/a/1190000016458913),
[https://www.jianshu.com/p/e21d19875fbb](https://www.jianshu.com/p/e21d19875fbb) 
 - 删除extract-text-webpack-plugin，改用mini-css-extract-plugin [文档](https://www.npmjs.com/package/mini-css-extract-plugin)
 - 增加 npm run build --report 打包后文件大小分析命令



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

### License
### [MIT](https://github.com/zhouyupeng/webpack4.x_demo/blob/master/LICENSE)
Copyright (c) 2018-present, ypzhou
