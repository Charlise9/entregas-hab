<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'Clientes' }">Clientes</router-link>|
      <router-link :to="{ name: 'Productos' }">Productos</router-link>|
      <router-link :to="{ name: 'Registro' }">Registro</router-link>|
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
</style>