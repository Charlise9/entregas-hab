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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* ul {
  background-color: rebeccapurple;
  color: goldenrod;
} */
</style>
