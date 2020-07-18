<template>
  <div id="app">
    <!-- Paso 3: declarar el componente -->
    <menucustom />
    <router-view id="vista" />
    <footercustom />
  </div>
</template>

<script>
// Paso 1: importar componente
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  // Paso 2: registrar el componente
  components: {
    menucustom,
    footercustom
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  margin: 0;
  padding: 0;
}

input:focus {
  outline: none;
}

button:focus {
  outline: none;
}

a {
  text-decoration: none;
}

h1 {
  color: yellowgreen;
}

img {
  box-shadow: 0 0 15px rgba(2, 250, 23, 1);
}

#vista {
  background-image: url("https://i.pinimg.com/originals/6f/08/ce/6f08ce865655b45e1343124cda6c653c.gif");
  background-repeat: repeat-y;
  background-size: contain;
  min-height: 100vh;
}

section {
  display: flex;
  flex-direction: column;
  width: 900px;
  position: relative;
  margin: 0 auto;
  background-color: rgb(25, 25, 25);
  color: yellowgreen;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 1.5rem auto;
}

li p {
  padding: 0.25rem;
}

li p.principal {
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1.5rem;
}

li button {
  border: none;
  background-color: yellowgreen;
  padding: 0.25rem;
  border-radius: 50px;
  font-weight: bold;
}

li button a {
  color: black;
}

#buscador {
  margin: 1rem;
  padding: 0.15rem;
  border: 0.1rem solid yellowgreen;
  border-radius: 50px;
  width: 75%;
  text-align: center;
  color: yellowgreen;
  background-color: rgb(50, 50, 50);
}

#app {
  font-family: "Indie Flower", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

@media (min-width: 700px) {
  section {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  section ul {
    width: calc(50% - 4rem);
  }
}

@media (min-width: 1000px) {
  #app {
    font-size: 20px;
  }

  h1 {
    font-size: 50px;
  }

  section ul {
    width: calc(33% - 4rem);
  }
}
</style>
