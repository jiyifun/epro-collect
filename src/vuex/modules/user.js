import {CREATE_USER, CREATE_USER_FAILURE} from '../mutation-types'
const state = {
  user_id: null
}

const mutations = {
  [CREATE_USER] (state, data) {
    console.log(data)
    state.user_id = data
  },
  [CREATE_USER_FAILURE] (state, data) {
    console.error(data)
  }
}

export default {
  state,
  mutations
}
