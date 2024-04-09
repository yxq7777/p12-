const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //入口人件
  entry: "",
  //出口文件
  outputDir: "dist",
  //放置静态资源的地方(js/css/img/font/media)
  assetsDir: "assets",
  //服务器代理-development
  devServer: {
    //端口号
    port: "888",
    //启动项目直接带开浏览器
    open: true,
    //配置代理
    proxy: {
      //代理标识
      "/api": {
        //代理路径
        target: "http://localhost:8080",
        //是否开启代理
        changeOrigin: true,
        //路径重写
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      //设置路径别名
      alias: {}
    }
  }
})
