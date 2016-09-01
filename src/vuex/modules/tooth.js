import { GET_TOOTH_LIST, GET_TOOTH_LIST_FAILURE, SUBMIT_TOOTH, SUBMIT_TOOTH_FAILURE } from '../mutation-types'

const state = {
  cariesList: [11], // 龋齿
  brokenList: [13]  // 残缺
}

const mutations = {

  [GET_TOOTH_LIST] (state, data) {
    state.cariesList = data.cariesList
    state.brokenList = data.brokenList
  },
  [GET_TOOTH_LIST_FAILURE] (state) {
    return state
  },
  [SUBMIT_TOOTH] (state, data) {
    state.cariesList = data.cariesList
    state.brokenList = data.brokenList
  },
  [SUBMIT_TOOTH_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
