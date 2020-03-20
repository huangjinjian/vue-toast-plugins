  vue-toast-plugins
  webpack 构建 vue 插件 toast

  1 初始化项目 npm init

  2 建立 src 里面放源代码

  3 webpack.config.js 配置

        library: "vueToast",   window.vueToast 即可访问到
        libraryTarget: "umd"  // 表示cmd amd common等等都通用

  4 html script type="module"

  5 webpack 解析 vue 文件的时候
  vue-loader vue-style-loader 记得

  6 npm 登录
  --- npm login
  -- 用户名
  -- 密码
  -- 邮箱

  7 npm 发布
  npm publish

  文件名 和 pageage.json 的 name 必须一致
