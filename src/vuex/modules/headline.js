import {UPDATE_HEADLINE, GET_HEADLINE} from '../mutation-types'
import {setDocTitle} from '../../util/lang'
const state = {
  headline: ''
}

const mutations = {
  [UPDATE_HEADLINE] (state, value) {
    state.headline = value
    setDocTitle(value)
    // console.log('print: ' + value)
    // document.title = value
    // const iframe = document.createElement('iframe')
    // iframe.src = 'img/logo.png'
    // const listener = () => {
    //   setTimeout(() => {
    //     iframe.removeEventListener('load', listener)
    //     setTimeout(() => {
    //       document.body.removeChild(iframe)
    //     }, 0)
    //   }, 0)
    // }
    // iframe.addEventListener('load', listener)
    // document.body.appendChild(iframe)
  },
  [GET_HEADLINE] (state) {
    return state.headline
  }
}

export default {
  state,
  mutations
}
