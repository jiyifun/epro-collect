import {SUBMIT_QUESTIONNAIRE} from '../mutation-types'
const state = {
  brushCount: null,
  isBled: null,
  isLoosen: null,
  isCleaned: null,
  isUnwell: null
}

const mutations = {
  [SUBMIT_QUESTIONNAIRE] (state, data) {
    state.brushCount = data.brushCount
    state.isBled = data.isBled
    state.isLoosen = data.isLoosen
    state.isCleaned = data.isCleaned
    state.isUnwell = data.isUnwell
  }
}

export default {
  state,
  mutations
}
