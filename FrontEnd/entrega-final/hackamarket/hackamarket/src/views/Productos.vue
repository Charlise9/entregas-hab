<template>
  <div class="productos">
    <vue-headful title="Hack A Market  | Productos" />
    <h1>Productos Hack A Market</h1>
    <productoscard :productos="productos" />
  </div>
</template>

<script>
import axios from "axios";
import productoscard from "@/components/ProductosCard.vue";

export default {
  name: "Productos",
  components: {
    productoscard,
  },
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    // FUNCIÓN PARA LISTAR PRODUCTOS
    getProductos() {
      let self = this;
      axios
        .get("http://localhost:3090/productos")
        .then(function (response) {
          console.log(response);
          self.productos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getProductos();
  },
};
</script>

<style scoped>
</style>