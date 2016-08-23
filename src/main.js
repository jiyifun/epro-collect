import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

// 引入页面
import Home from './views/Home'
import List from './views/List'
import Mine from './views/Mine'
import Setting from './views/Setting'
// 引入样式
import './styles/css/global.scss'
// 注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

FastClick.attach(window.document.body)
// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/list': {
    component: List
  },
  '/mine': {
    component: Mine
  },
  '/setting': {
    component: Setting
  }

})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
