import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  position: "北京",
  city : "北京市",
  userName : '',
}

const mutations = {
  setPosition(state, val) {
    state.position = val;
  },
  setCity(state,val){
    state.city = val
  },
  setUserName(state,val){
    state.userName = val;
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
