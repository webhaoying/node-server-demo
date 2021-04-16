## 永辉彩食鲜官网前端代码

### 该项目基于angularJs开发，其框架用法请查看angularJsp文档  [文档地址](https://www.runoob.com/angularjs/angularjs-reference.html)

#### 注：目录说明请查看项目根目录下的file.md文件
---
### 开发流程
1.安装依赖
```
npm install
```
2.启动本地服务,通过8000端口访问，如果出错请检查下端口是否被占用
```
npm start
```
3.测试环境分支：dev, 生产环境分支 master
---
### 上线流程
1.static目录对应要上线的文件，开发完成将改资源放到服务器/var/www/html目录下即可
  其中的node服务以及koa-router的使用，是为了单页面变多页面本地开发使用，测试环境以及线上环境的路由转发由apache服务器提供。

---
### 服务器地址更改
1.接口地址在/static/app.js的89行
```
  window.apiconn.wsUri = 'ws://www.freshfood.cn/yh_ga';  // 生产环境地址
  window.apiconn.wsUri = 'ws://10.252.200.178/yh_g';  // 测试环境地址
```
2.静态资源的下载地址在/static/app.js的229行
```
$rootScope.staticRootPath='http://www.freshfood.cn/cgi-bin/download.pl?proj=yh_ga&fid='  // 生产环境地址
$rootScope.staticRootPath='http://10.252.200.178/cgi-bin/download.pl?proj=demo8&fid='  // 测试环境地址
```
3.注意在发布的时候，测试环境以及生产环境，对应的接口地址以及静态资源地址不一致,注意修改。
---
### 与后端交互
1.已在window上面添加ajax方法使用示例如下
  根据供应商自己封装的static/APIConnection.min.js,封装成如下的调用方式
```
window.ajax({
      obj:'user',
      act:'newsread',
      page_num:page_num,
      page_size:5,
      home:'是',
    },function (jo) {
      $scope.news=jo.info
    })
```
该方法接收两个参数，第一个为请求参数，第二个为回调函数。
