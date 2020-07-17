<template>
  <div>
    <ul v-for="track in toptracks" :key="track.id">
      <li>
        <p>{{track.name}}</p>
        <a :href="track.url">{{track.url}}</a>
        <p>ARTISTA: {{ track.artist.name }}</p>
        <p>VECES ESCUCHADA: {{ track.listeners }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TracksCard",
  props: {
    toptracks: Array
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>