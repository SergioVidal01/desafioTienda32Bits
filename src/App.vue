<template>
  <div class="app">
    <h1 class="main-title">Tienda 32 Bits</h1>
    <h3 class="sub-title">Lista de Juegos</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <Stock
          v-for="juego in stock"
          :key="juego.codigo"
          :juego="juego"
          @aumentar-stock="aumentarStock"
          @disminuir-stock="disminuirStock"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Stock from "./components/Stock.vue";

export default {
  name: "App",
  components: {
    Stock,
  },
  computed: {
    ...mapState(["stock"]),
  },
  methods: {
    ...mapActions(["incrementStock", "decrementStock"]),
    aumentarStock(codigo) {
      this.incrementStock(codigo);
    },
    disminuirStock(codigo) {
      this.decrementStock(codigo);
    },
  },
};
</script>

<style>
/* Estilos de la tabla */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: center;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}


.main-title {
  color: #333;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.sub-title {
  color: #666;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
