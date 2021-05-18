/*
 * @Author: Pmy
 * @Date: 2021-05-16 09:43:15
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 15:52:23
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
// import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'vant',
    //       esModule: true,
    //       resolveStyle: (name) => `vant/es/${name}/style`,
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), //设置@ 指向src目录
      'views': resolve(__dirname, 'src/views'), //设置views 指向src/views目录
      'assets': resolve(__dirname, 'src/assets'), //设置assets 指向src/assets目录
      'components': resolve(__dirname, 'src/components'), //设置components 指向src/components目录
      'utils': resolve(__dirname, 'src/utils'), //设置utils 指向src/utils目录
      'common': resolve(__dirname, 'src/common'), //设置common 指向src/common目录   通用类库
      'style': resolve(__dirname, 'src/style'), //设置style 指向src/style目录  通用样式目录
      'router': resolve(__dirname, 'src/router'), //设置router 指向src/router目录 
      'network': resolve(__dirname, 'src/network'), //设置
    }
  },
  base: './', //设置打包路径
  server: {
    port: 4000, //设置服务启动端口号
    open: true, //设置服务启动时自动打开浏览器
    cors: true, //允许跨域
    https: false, //设置https
  }
})
