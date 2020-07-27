<template>
  <div class="clientes">
    <vue-headful title="Hack A Market  | Clientes" />
    <h1>Clientes Hack A Market</h1>
    <clientescard v-on:datos="mostrarInfoCliente" :clientes="clientes" />

    <!-- MODAL PARA ACTUALIZAR CLIENTE -->
    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente:</h3>
        <p>ID del cliente: {{idCliente}}</p>
        <input type="text" placeholder="Nombre del cliente" v-model="nombreActualizado" />
        <br />
        <input type="text" placeholder="Usuario del cliente" v-model="usuarioActualizado" />
        <br />
        <input type="text" placeholder="Password del cliente" v-model="passwordActualizada" />
        <br />
        <input type="text" placeholder="Email del cliente" v-model="emailActualizado" />
        <br />
        <input type="url" placeholder="Foto del cliente" v-model="fotoActualizada" />
        <br />
        <button class="cancel" @click="seeModal =! seeModal">Cancelar</button>
        <button @click="sweetalertEdit(),actualizarCliente()">Actualizar cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import clientescard from "@/components/ClientesCard.vue";
import Swal from "sweetalert2";

export default {
  name: "Clientes",
  components: {
    clientescard,
  },
  data() {
    return {
      clientes: [],
      idCliente: "",
      nombreActualizado: "",
      usuarioActualizado: "",
      passwordActualizada: "",
      emailActualizado: "",
      fotoActualizada: "",
      seeModal: false,
    };
  },
  methods: {
    // FUNCIÓN SWEETALERT
    sweetalertEdit() {
      Swal.fire({
        title: "¡ALERTA!",
        text: "Vas a editar un usuario, ¿estás seguro?",
        icon: "warning",
        confirmButtonText: "Sí",
        showCancelButton: true,
        onClose: () => {
          location.reload();
        },
      });
    },

    // FUNCIÓN PARA LISTAR CLIENTES
    getClientes() {
      let self = this;
      // LLAMADA DE AXIOS A LA API
      axios
        .get("http://localhost:3090/clientes")
        .then(function (response) {
          console.log(response);
          self.clientes = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // FUNCIÓN PARA MOSTRAR LA INFO DEL CLIENTE
    mostrarInfoCliente(datosCliente) {
      this.nombreActualizado = datosCliente.nombre;
      this.usuarioActualizado = datosCliente.usuario;
      this.passwordActualizada = datosCliente.password;
      this.emailActualizado = datosCliente.email;
      this.fotoActualizada = datosCliente.foto;
      this.idCliente = datosCliente.id;

      this.seeModal = true;
    },
    // FUNCIÓN PARA ACTUALIZAR LOS DATOS DEL CLIENTE
    actualizarCliente() {
      let self = this;
      axios
        .put("http://localhost:3090/clientes/update/" + self.idCliente, {
          nombre: self.nombreActualizado,
          usuario: self.usuarioActualizado,
          password: self.passwordActualizada,
          email: self.emailActualizado,
          foto: self.fotoActualizada,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error;
        });
    },
  },
  created() {
    this.getClientes();
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
</style>