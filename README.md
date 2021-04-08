# yxk-community-vue

## 后端项目
[https://github.com/XieZhenyu98/yxkCommunity](https://github.com/XieZhenyu98/yxkCommunity)

## 安装依赖
```
npm install
```

### 开发环境启动编译和热重新加载
```
npm run serve
```

### 打包
```
npm run build
```

### 修复错误的配置
```
npm run lint
```

### 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目目录说明
```sh
|-- src                              // 源码目录
|   |-- components                   // 组件
|       |-- detail                   // 帖子详情相关组件
|       |-- home                     // 主页相关组件
|       |-- personal                 // 个人中心相关组件
|       |-- useredit                 // 用户编辑相关组件
|   |-- router                       // 路由配置和程序的基本信息配置
|       |-- index.js                 // 配置页面路由
|   |-- view                         // 各种页面组件
|       |-- Detail.vue               // 帖子详情
|       |-- Home.vue                 // 首页
|       |-- Login.vue                // 登录
|       |-- Personal.vue             // 我的主页,和消息列表
|       |-- Publish.vue              // 发帖
|       |-- Register.vue             // 注册
|       |-- SearchMore.vue           // 查看更多帖子
|       |-- UserEdit.vue             // 编辑用户
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件,加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息,通过执行 npm init 命令创建
```
