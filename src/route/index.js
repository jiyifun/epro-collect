// import { setDocTitle } from '../util'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
export function configRouter (router) {
  router.map({
    '/': {
      component: Home,
      title: '首页'
    },
    '/home': {
      component: Home,
      title: '首页'
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
