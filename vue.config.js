const { defineConfig } = require("@vue/cli-service")
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
// 获取代理标识
process.env.VUE_APP_BASE_API
// 获取代理地址
process.env.VUE_APP_BASE_URL
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //入口人件
  // entry: "",
  //出口文件
  outputDir: "dist",
  //放置静态资源的地方(js/css/img/font/media)
  assetsDir: "assets",
  //服务器代理-development
  devServer: {
    //端口号
    // port: "888",
    //启动项目直接带开浏览器
    open: true,
    //配置代理
    proxy: {
      //代理标识
      // "/api": {
      //   //代理路径
      //   target: "api",
      //   //是否开启代理
      //   changeOrigin: true,
      //   //路径重写
      //   pathRewrite: {
      //     "^/api": ""
      //   }
      // },
      // 动态代理标识
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: " "
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      //设置路径别名
      alias: {
        "@com": resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
})
