<template>
  <div>
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        <img :src="producto.imagen" />
        <h2>{{ producto.nombre }}</h2>
        <p>
          <b>Stock:</b>
          <span :class="{ red: producto.stock === '0'}">{{ producto.stock }}</span>
        </p>
        <p>
          <b>Disponibilidad:</b>
          <span
            :class="{
          green: producto.disponibilidad === 'disponible',
          yellow: producto.disponibilidad === 'proximamente',
          red: producto.disponibilidad === 'no disponible'
          }"
          >{{ producto.disponibilidad }}</span>
        </p>
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
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
  display: block;
  padding: 0.667rem;
}

ul li p span {
  margin-left: 0.3rem;
  font-size: 1rem;
}

ul li img {
  width: 150px;
}

button {
  justify-content: flex-end;
}

img {
  align-self: center;
  width: 50px;
  height: 175px;
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
  /* display: none; */
  visibility: hidden;
}

@media (min-width: 700px) {
  ul li {
    width: 320px;
    padding: 0.3rem;
  }

  ul li p span {
    font-size: 1.2rem;
  }
}
</style>