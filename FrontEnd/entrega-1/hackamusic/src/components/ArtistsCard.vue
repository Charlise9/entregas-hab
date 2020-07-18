<template>
  <div>
    <h1>Top Artists</h1>
    <input id="buscador" type="search" v-model="search" placeholder="Búsqueda de artista" />

    <section>
      <ul v-for="artist in filtered" :key="artist.id">
        <li>
          <img :src="artist.image[2]['#text']" />
          <p class="principal">{{ artist.name }}</p>
          <p>OYENTES: {{ artist.listeners }}</p>
          <button>
            <a :href="artist.url" target="_blank">Info de {{artist.name}}</a>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "ArtistsCard",
  props: {
    artists: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>


