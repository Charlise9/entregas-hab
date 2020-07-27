<template>
  <div class="registro">
    <vue-headful title="Hack A Market  | Registro" />
    <h1>Registro Hack A Market</h1>

    <input type="text" v-model="nombre" placeholder="Nombre" />
    <br />
    <input type="text" v-model="usuario" placeholder="Usuario" />
    <br />
    <input type="text" v-model="password" placeholder="Password" />
    <br />
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="url" v-model="foto" placeholder="URL de tu foto" />
    <br />
    <button @click="validatingData()">Registrarse</button>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Registro",
  data() {
    return {
      nombre: "",
      usuario: "",
      password: "",
      email: "",
      foto: "",
      createClient: false,
      errorMsrg: false,
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
    sweetalertAddClient() {
      Swal.fire({
        text: "Cliente creado con éxito",
        icon: "success",
        confirmButtonText: "Ok",
      });
    },
    validatingData() {
      if (
        this.nombre === "" ||
        this.usuario === "" ||
        this.password === "" ||
        this.email === "" ||
        this.foto === ""
      ) {
        this.sweetalertError();
        this.createClient = false;
      } else {
        this.createClient = true;
        this.addNewClient();
        this.sweetalertAddClient();
      }
    },
    addNewClient() {
      if (this.createClient === true) {
        let self = this;
        axios
          .post("http://localhost:3090/clientes/add", {
            nombre: self.nombre,
            usuario: self.usuario,
            password: self.password,
            email: self.email,
            foto: self.foto,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error;
          });
        this.createClient = false;
        this.nombre = "";
        this.usuario = "";
        this.password = "";
        this.email = "";
        this.foto = "";
      } else {
        console.log("Yo no debería estar aquí.");
      }
    },
  },
};
</script>

<style scoped>
</style>