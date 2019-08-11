import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataEmployee: []
  },
  mutations: {
    setDataEmployee(state, data) {
      state.dataEmployee = data
    }
  },
  actions: {}
});
