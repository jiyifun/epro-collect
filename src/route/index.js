// import { setDocTitle } from '../util'
// 业务模块
import Health from '../views/Health'
import List from '../views/List'
import Mine from '../views/Mine'
import Setting from '../views/Setting'
import NotFound from '../views/NotFound'
// 注册模块
import RegisterByWx from '../views/register/WeiXin'
import RegisterByPhone from '../views/register/Phone'

export function configRouter (router) {
  router.map({
    '/': {
      component: Health,
      title: '首页'
    },
    '/register': {
      subRoutes: {
        '/': {
          component: RegisterByWx
        },
        '/weixin': {
          component: RegisterByWx
        },
        '/phone': {
          component: RegisterByPhone
        }
      }
    },
    '/health': {
      component: Health
    },
    '/list': {
      component: List
    },
    '/mine': {
      component: Mine
    },
    '/setting': {
      component: Setting
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
