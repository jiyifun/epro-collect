// import { setDocTitle } from '../util'
// 业务模块
import Home from '../views/Home'
import Histroy from '../views/Histroy'
import UserInfo from '../views/UserInfo'
import Questionnaire from '../views/Questionnaire'
import ToothPic from '../views/ToothPic'
// import App from '../App'
// import NotFound from '../views/NotFound'
import Tooth from '../views/tooth/Tooth'
import First from '../views/tooth/First'
import Second from '../views/tooth/Second'
import Third from '../views/tooth/Third'
import Fourth from '../views/tooth/Fourth'
// 注册模块

export function configRouter (router) {
  router.map({
    '/': {
      component: Home,
      title: '首页'
    },
    '/home': {
      component: Home
    },
    '/histroy': {
      component: Histroy
    },
    '/user_info': {
      component: UserInfo
    },
    '/questionnaire': {
      component: Questionnaire
    },
    '/tooth_pic': {
      component: ToothPic
    },
    '/tooth': {
      component: Tooth
    },
    '/tooth/first': {
      component: First
    },
    '/tooth/second': {
      component: Second
    },
    '/tooth/third': {
      component: Third
    },
    '/tooth/fourth': {
      component: Fourth
    }
  })
  // router.redirect({// 定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  //   '*': '/home'// 重定向任意未匹配路径到/home
  // })
  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach((transition) => {
  //   setDocTitle(transition.to.title)
  //   transition.next()
  // })
}
