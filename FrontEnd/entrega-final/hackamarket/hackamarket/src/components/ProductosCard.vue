<template>
  <div>
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        <img :src="producto.imagen" />
        <p>{{ producto.nombre }}</p>
        <p>{{ producto.stock }}</p>
        <p>{{ producto.disponibilidad }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductosCard",
  props: {
    productos: Array,
  },
};
</script>

<style scoped>
</style>