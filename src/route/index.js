// import { setDocTitle } from '../util'
// 业务模块
import Home from '../views/Home'
import Histroy from '../views/Histroy'
import UserInfo from '../views/UserInfo'
import NotFound from '../views/NotFound'
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
    '*': {
      component: NotFound,
      title: '404'
    }
  })
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
