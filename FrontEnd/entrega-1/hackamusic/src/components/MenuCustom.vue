<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'TopArtists' }">Top Artists</router-link>
      <router-link :to="{ name: 'TopTracks' }">Top Tracks</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  /* padding: 30px;
  position: fixed;
  top: 0; */
  position: fixed;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  margin: auto;
  background-color: rgb(50, 50, 50);
}

#nav a {
  font-weight: bold;
  color: yellowgreen;
  padding: 0.8rem;
  font-size: 0.75rem;
}

#nav a.router-link-exact-active {
  color: rgb(2, 245, 2);
}

@media (min-width: 1000px) {
  #nav a {
    font-size: 1.5rem;
  }
}
</style>