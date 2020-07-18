<template>
  <div>
    <h1>Top Tags</h1>
    <input id="buscador" type="search" v-model="search" placeholder="Búsqueda por género" />

    <section>
      <ul v-for="tag in filtered" :key="tag.id">
        <li>
          <p class="principal">{{ tag.name }}</p>
          <p>Nº ETIQUETAS: {{ tag.taggings }}</p>
          <button>
            <a :href="tag.url" target="_blank">Ir a {{tag.name}}</a>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>



<script>
export default {
  name: "TagsCard",
  props: {
    toptags: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptags;
      }
      return this.toptags.filter(tag =>
        tag.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>