<template>
  <div>
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        <img :src="producto.imagen" />
        <h2>{{ producto.nombre }}</h2>
        <p class="title">Stock:</p>
        <p :class="{ red: producto.stock === '0'}">{{ producto.stock }}</p>
        <p class="title">Disponibilidad:</p>
        <p
          :class="{
          green: producto.disponibilidad === 'disponible',
          yellow: producto.disponibilidad === 'proximamente',
          red: producto.disponibilidad === 'no disponible'
          }"
        >{{ producto.disponibilidad }}</p>
        <button :class="{ hide: producto.stock === '0'}" @click="sweetalertComprar()">Comprar</button>
        <button :class="{ hide: producto.stock === '0'}" @click="sweetalertReservar()">Reservar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ProductosCard",
  props: {
    productos: Array,
  },
  methods: {
    sweetalertComprar() {
      Swal.fire({
        text: "¿Seguro que quieres comprar este videojuego?",
        icon: "question",
        confirmButtonText: "Sí",
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "¡GRACIAS!",
            text: "por comprar en nuestra página.",
            icon: "success",
            confirmButtonText: "Ok",
            onClose: () => {
              location.reload();
            },
          });
        }
      });
    },
    sweetalertReservar() {
      Swal.fire({
        text: "¿Seguro que quieres reservar este videojuego?",
        icon: "question",
        confirmButtonText: "Sí",
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "¡GRACIAS!",
            text: "por comprar en nuestra página.",
            icon: "success",
            confirmButtonText: "Ok",
            onClose: () => {
              location.reload();
            },
          });
        }
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
}

ul li p {
  display: inline-block;
  padding: 0.667rem;
}

ul li img {
  width: 150px;
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

.red {
  color: red;
}

.green {
  color: green;
}

.yellow {
  color: goldenrod;
}

.hide {
  display: none;
}

.title {
  font-weight: bold;
}
</style>