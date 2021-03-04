import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

const setUsers = store => {
  store.subscribe(mutation => {
    if (mutation.type === "user/UPDATE_USERS") {
      localStorage.setItem("users", JSON.stringify(mutation.payload));
    }
  });
};

export default function() {
  const Store = new Vuex.Store({
    modules: {
      user
    },
    plugins: [setUsers]
  });
  return Store;
}
