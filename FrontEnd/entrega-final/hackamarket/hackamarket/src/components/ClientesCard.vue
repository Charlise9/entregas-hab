<template>
  <div>
    <ul>
      <li v-for="(cliente, index) in clientes" :key="cliente.id">
        <img :src="cliente.foto" />
        <p>{{ cliente.nombre }}</p>
        <p>{{ cliente.usuario }}</p>
        <p>{{ cliente.password }}</p>
        <p>{{ cliente.email }}</p>
        <button class="edit" @click="enviarDatosCliente(index)">Editar</button>
        <button class="delete" @click="sweetalertDelete(), enviarIndiceCliente(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ClientesCard",
  props: {
    clientes: Array,
  },
  methods: {
    enviarDatosCliente(index) {
      let datosCliente = this.clientes[index];
      this.$emit("datos", datosCliente);
    },
    enviarIndiceCliente(index) {
      let indiceCliente = this.clientes[index].id;
      this.$emit("borrar", indiceCliente);
    },
    sweetalertDelete() {
      Swal.fire({
        title: "¡ALERTA!",
        text: "Vas a borrar un usuario, ¿estás seguro?",
        icon: "warning",
        confirmButtonText: "Sí",
        showCancelButton: true,
        onClose: () => {
          location.reload();
        },
      });
    },
  },
};
</script>

<style scoped>
</style>