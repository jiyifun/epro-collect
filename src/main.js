import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

// 引入页面
import Home from './views/Home'
import About from './views/About'
import Tags from './views/Tags'
import Article from './views/Article'
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
  '/about': {
    component: About
  },
  '/tags': {
    component: Tags
  },
  '/article/:id': {
    name: 'article',
    component: Article
  }

})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
