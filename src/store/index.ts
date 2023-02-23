import { createStore } from "vuex";
import Game from "@/ts/Game";

export default createStore({
  state: {
    game: new Game(),
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
