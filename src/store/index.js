import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import gettters from './getters'

const state = {
  cartList: []
}

export default createStore({
  state,
  mutations,
  actions,
  gettters,
  modules: {
  }
})
