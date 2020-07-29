<template>
  <div>
    <ul>
      <li v-for="(cliente, index) in clientes" :key="cliente.id">
        <img :src="cliente.foto" />
        <h2>{{ cliente.nombre }}</h2>
        <p>
          <b>Usuario:</b>
          {{ cliente.usuario }}
        </p>
        <p>
          <b>Contraseña:</b>
          {{ cliente.password }}
        </p>
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
ul {
  list-style: none;
}

ul li {
  border: 2px solid #e84a5f;
  border-radius: 15px;
  margin: 0.667rem;
  display: inline-block;
}

ul li p {
  /* display: inline-block; */
  padding: 0.667rem;
}

.delete {
  background-color: rgb(25, 25, 25);
  color: orangered;
}

.edit,
.delete {
  margin: 0.2rem;
  display: inline-block;
}
</style>