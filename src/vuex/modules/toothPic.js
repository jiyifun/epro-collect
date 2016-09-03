import {GET_TOOTH_PIC, SUBMIT_TOOTH_PIC} from '../mutation-types'

const state = {
  upper: null,
  lower: null
}

const mutations = {
  [GET_TOOTH_PIC] (state) {
    return state
  },
  [SUBMIT_TOOTH_PIC] (state, data) {
    state.upper = data.upper
    state.lower = data.lower
  }
}

export default {
  state,
  mutations
}
