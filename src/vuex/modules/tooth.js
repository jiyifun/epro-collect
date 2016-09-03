import {SET_CURRENTTEETH, REMOVE_CARIES_LIST, ADD_CARIES_LIST, ADD_BROKEN_LIST, REMOVE_BROKEN_LIST} from '../mutation-types'

const state = {
  currentTeeth: 0, // 选中的牙齿
  cariesList: [11], // 龋齿
  brokenList: [13]  // 残缺
}

const mutations = {
  [ADD_BROKEN_LIST] (state, data) {
    state.brokenList.push(data)
  },
  [REMOVE_BROKEN_LIST] (state, data) {
    console.info('即将移除' + data + '号残缺')
    var i = state.brokenList.indexOf(data)
    if (i >= 0) {
      state.brokenList.splice(i, 1)
    } else {
      console.error('查无此残缺，无法移除')
    }
  },
  [ADD_CARIES_LIST] (state, data) {
    state.cariesList.push(data)
  },
  [REMOVE_CARIES_LIST] (state, data) {
    console.info('即将移除' + data + '号龋齿')
    var i = state.cariesList.indexOf(data)
    if (i >= 0) {
      state.cariesList.splice(i, 1)
    } else {
      console.error('查无此龋齿，无法移除')
    }
  },
  [SET_CURRENTTEETH] (state, data) {
    state.currentTeeth = data
  }
}

export default {
  state,
  mutations
}
