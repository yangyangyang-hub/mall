import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldProduct = null;
      for(let item of state.cartList) {
        if(item.id === payload.id) {
          oldProduct = item
        }
        console.log(222);
      }

      if (oldProduct) {
        oldProduct.count += 1
        console.log(2222222);
      } else {
        payload.count = 1;
        payload.checked = true
        state.cartList.push(payload)
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
