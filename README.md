##  [demo](https://huangjinjian.github.io/vue-toast-plugins/src/index.html)

## 安装插件

## npm i vue-toast-nanfeng

## 在 main.js 引入

        *const toast = require('vue-toast-nanfeng')

        *Vue.use(toast,option)

## 在实例使用如下：

        *this.\$toast.show('msg',option)

        *this.$toast.error('msg',option)

        *this.$toast.success('msg',option)

        *this.\$toast.info('msg',option)

## vue-toast-plugins

## webpack 构建 vue 插件 toast 开发步骤

## 初始化项目 npm init

## 根目录建立 src 里面放源代码

## webpack.config.js 配置

        *library: "vueToast",   window.vueToast 即可访问到
        *libraryTarget: "umd"  // 表示cmd amd common等等都通用

## html script type="module" 才能解析 module

## webpack 解析 vue 文件的时候

        *vue-loader vue-style-loader 依赖这loader

## package.json 文件

        * name 包名  引用也是
        * main webpack 打包的文件 入口文件

## npm 登录

        * npm login
        * 用户名
        * 密码
        * 邮箱

## npm 发布

        * npm publish
