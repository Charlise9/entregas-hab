<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Productos' }">Productos</router-link>
      <router-link :to="{ name: 'AddProductos' }">Añadir Productos</router-link>
      <router-link :to="{ name: 'Clientes' }">Clientes</router-link>
      <router-link :to="{ name: 'Registro' }">Registro</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom",
};
</script>

<style scoped>
#nav {
  position: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  margin: auto;
  background-color: #e84a5f;
  padding-top: 15px;
  padding-bottom: 15px;
}
#nav a {
  font-weight: bold;
  color: whitesmoke;
  padding: auto;
  font-size: 0.5rem;
  text-decoration: none;
  margin: 0 0.25rem;
}
#nav a.router-link-exact-active {
  color: rgb(50, 50, 50);
}

@media (min-width: 700px) {
  #nav a {
    font-size: 1rem;
    margin: 0 0.5rem;
  }
}

@media (min-width: 1000px) {
  #nav a {
    font-size: 1.5rem;
    margin: 0 0.75rem;
  }
}
</style>