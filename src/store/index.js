import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    update(state, newCount) {
      state.count = newCount;
    }
  },
  actions: {
    add(context) {
      context.commit('update', context.state.count + 1);
    },
    minus(context) {
      context.commit('update', context.state.count - 1);
    }
  }
})