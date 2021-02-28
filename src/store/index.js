import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state,payload) {
      let oldProduct = null;
      for(let item of state.cartList) {
        if(item.id === payload.id) {
          oldProduct = item
        }
        if (oldProduct) {
          oldProduct.count += 1
        } else {
          payload.count = 1;
          state.cartList.push(payload)
        }
      }
     
      state.cartList.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
