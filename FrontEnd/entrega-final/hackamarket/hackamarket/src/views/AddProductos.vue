<template>
  <div class="addproductos">
    <vue-headful title="Hack A Market  | Añadir Productos" />
    <h1>Añadir productos</h1>

    <input type="text" v-model="nombre" placeholder="Nombre" />
    <br />
    <input type="text" v-model="stock" placeholder="Stock" />
    <br />
    <input type="text" v-model="disponibilidad" placeholder="Disponibilidad" />
    <br />
    <input type="url" v-model="imagen" placeholder="Imagen" />
    <br />
    <button @click="validatingData()">Añadir producto</button>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "AddProductos",
  data() {
    return {
      nombre: "",
      stock: "0",
      disponibilidad: "",
      imagen: "",
      createProduct: false,
    };
  },
  methods: {
    sweetalertError() {
      Swal.fire({
        title: "¡ALERTA!",
        text: "Tienes campos vacíos",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    },
    sweetalertAddProduct() {
      Swal.fire({
        text: "Producto añadido con éxito",
        icon: "success",
        confirmButtonText: "Ok",
      });
    },
    validatingData() {
      if (
        this.nombre === "" ||
        this.disponibilidad === "" ||
        this.imagen === ""
      ) {
        this.sweetalertError();
        this.createProduct = false;
      } else {
        this.createProduct = true;
        this.addNewProduct();
        this.sweetalertAddProduct();
      }
    },
    addNewProduct() {
      if (this.createProduct === true) {
        let self = this;
        axios
          .post("http://localhost:3090/productos/add", {
            nombre: self.nombre,
            stock: self.stock,
            disponibilidad: self.disponibilidad,
            imagen: self.imagen,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error;
          });
        this.createProduct = false;
        this.nombre = "";
        this.stock = "0";
        this.disponibilidad = "";
        this.imagen = "";
      } else {
        console.log("Wrong way amigo.");
      }
    },
  },
};
</script>

<style scoped>
.addproductos {
  padding-top: 10rem;
}
</style>