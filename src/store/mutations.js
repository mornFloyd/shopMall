import {ADD_COUNT,ADD_CART} from './mutation-type'
export default {
  [ADD_COUNT](state,oldProduct) {
    oldProduct.count++
  },
  [ADD_CART](state,payload) {
    payload.isCheck = true
    state.cartList.push(payload)
  }
}