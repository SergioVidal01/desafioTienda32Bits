<template>
  <tr class="table-row">
    <td>{{ juego.codigo }}</td>
    <td>{{ juego.nombre }}</td>
    <td>{{ juego.stock }}</td>
    <td>${{ juego.precio }}</td>
    <td>
      <button class="button" @click="aumentarStock">+</button>
      <button class="button" @click="disminuirStock" :disabled="juego.stock === 0">-</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Stock",
  props: {
    juego: {
      type: Object,
      required: true,
    },
  },
  methods: {
    disminuirStock() {
      this.$emit("disminuir-stock", this.juego.codigo);
    },
    aumentarStock() {
      this.$emit("aumentar-stock", this.juego.codigo);
    },
  
  },
};
</script>

<style scoped>
.table-row {
  transition: background-color 0.3s ease;
}
.table-row:hover {
  background-color: #f1f1f1;
}
.button {
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  background-color: #009879;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #007f68;
}
.button:disabled {
  cursor: not-allowed;
  background-color: #ccc;
}
</style>
