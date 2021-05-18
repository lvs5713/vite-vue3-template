/*
 * @Author: Pmy
 * @Date: 2021-05-16 10:29:31
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 10:32:54
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit("increment")
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})