<template>
  <div id="app">
    <!-- Paso 3: declarar el componente -->
    <menucustom />
    <router-view />
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
section {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 1.5rem auto;
}

li p.principal {
  font-weight: bold;
  font-size: 1.2rem;
  color: yellowgreen;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: rgb(100, 100, 100);
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
}
</style>
