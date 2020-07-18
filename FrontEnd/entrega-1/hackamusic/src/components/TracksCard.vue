<template>
  <div>
    <h1>Top Tracks</h1>
    <input
      id="buscador"
      type="search"
      v-model="search"
      placeholder="Búsqueda por nombre de canción"
    />

    <section>
      <ul v-for="track in filtered" :key="track.id">
        <li>
          <p class="principal">{{track.name}}</p>
          <p>ARTISTA: {{ track.artist.name }}</p>
          <p>VECES ESCUCHADA: {{ track.listeners }}</p>
          <button>
            <a :href="track.url" target="_blank">ESCUCHAR {{track.name}}</a>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "TracksCard",
  props: {
    toptracks: Array
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filtered() {
      if (!this.search) {
        return this.toptracks;
      }
      return this.toptracks.filter(track =>
        track.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
</style>