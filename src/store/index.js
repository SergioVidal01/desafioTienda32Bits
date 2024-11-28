import { createStore } from "vuex";

export default createStore({
  state: {
    stock: [
      { codigo: "0001", nombre: "Sekiro", stock: 43, precio: 30000, color: "red" },
      { codigo: "0002", nombre: "Fifa 21", stock: 55, precio: 25000, color: "blue" },
      { codigo: "0003", nombre: "Gears of War 4", stock: 12, precio: 15000, color: "green" },
      { codigo: "0004", nombre: "Mario Tennis Aces", stock: 56, precio: 35000, color: "black" },
      { codigo: "0005", nombre: "Bloodborne", stock: 12, precio: 10000, color: "blue" },
      { codigo: "0006", nombre: "Forza Horizon 4", stock: 4, precio: 20000, color: "red" },
    ],
  },
  mutations: {
    // Incrementar el stock de un videojuego
    increaseStock(state, codigo) {
      const juego = state.stock.find(juego => juego.codigo === codigo);
      if (juego) juego.stock++;
    },
    // Disminuir el stock de un videojuego
    decreaseStock(state, codigo) {
      const juego = state.stock.find(juego => juego.codigo === codigo);
      if (juego && juego.stock > 0) juego.stock--;
    },
  },
  actions: {
    // Llamar a la mutación para incrementar el stock
    incrementStock({ commit }, codigo) {
      commit("increaseStock", codigo);
    },
    // Llamar a la mutación para disminuir el stock
    decrementStock({ commit }, codigo) {
      commit("decreaseStock", codigo);
    },
  },
  modules: {},
});
