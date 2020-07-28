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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgb(0, 0, 0, 0.5);
}

.modalBox {
  background-color: #fefefe;
  margin: 2% auto;
  padding: 3rem;
  width: 80%;
  border: 2px solid #e84a5f;
  border-radius: 12px;
}

.productos {
  padding-top: 5rem;
}
</style>