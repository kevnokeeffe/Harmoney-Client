import Vue from "vue";
import Vuex from "vuex";
import * as auth from "../../services/AuthService";
import Auth from '../../warehouse/Auth'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: `http://localhost:${process.env.VUE_APP_PORT}`,
    fName: null,
    email: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.lName = auth.getLastName();
        state.fName = auth.getName();
        state.email = auth.getEmail();
        state.userId = auth.getUserId();
      } else {
        state.userId = null;
        state.email = null;
        state.fName = null;
        state.lName = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit("authenticate");
    }
  },
  modules:{
    Auth
  }
});

export default store;

