<template>
  <div>
    <ul v-for="artist in artists" :key="artist.id">
      <li>
        <p class="artist">{{ artist.name }}</p>
        <img :src="artist.image[2]['#text']" />
        <a :href="artist.url">{{artist.url}}</a>

        <p>OYENTES: {{ artist.listeners }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArtistsCard",
  props: {
    artists: Array
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  margin-bottom: 2rem;
}

.artist {
  font-weight: bold;
}
</style>