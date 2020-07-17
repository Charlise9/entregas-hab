<template>
  <div>
    <ul v-for="tag in toptags" :key="tag.id">
      <li>
        <p>{{ tag.name }}</p>
        <a :href="tag.url">{{tag.url}}</a>
        <p>Nº ETIQUETAS: {{ tag.taggings }}</p>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: "TagsCard",
  props: {
    toptags: Array
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>