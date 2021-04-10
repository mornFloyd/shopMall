import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import store from './store'
import router from './router'
//导入图片懒加载
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
//移动端300ms延迟点击
FastClick.attach(document.body)

//图片懒加载使用
//const loadingImg = require('assets/img/common/cheems.jpg')
const app = createApp(App)

//console.log(VueLazyload);
//app.use(VueLazyload)

app.config.globalProperties.$bus = new mitt()

app.use(store).use(router).mount('#app')
