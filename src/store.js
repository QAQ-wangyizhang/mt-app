import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  position: "北京"
}

const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
}

const actions = {
  setPosition({
    commit
  }, val) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
