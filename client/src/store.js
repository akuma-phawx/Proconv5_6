import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("jwt") || "",
    user: {},
  },
  mutations: {
    auth_success(state, { jwt, user }) {
      state.token = jwt;
      state.user = user;
    },
    logout(state) {
      state.token = "";
      state.user = {};
    },
  },
  actions: {
    login({ commit }, user) {
      let jwt = localStorage.getItem("jwt");
      commit("auth_success", { jwt, user });
    },
    register({ commit }, user) {
      let jwt = localStorage.getItem("jwt");
      commit("auth_success", { jwt, user });
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  getters: {
    username: (state) => state.user.username || "",
    isLoggedIn: (state) => !!state.token,
  },
});
