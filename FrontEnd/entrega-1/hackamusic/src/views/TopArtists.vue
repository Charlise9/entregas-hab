<template>
  <div class="topartists">
    <vue-headful title="Hack A Music | Top Artists" />

    <artistscard :artists="artists" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import artistscard from "@/components/ArtistsCard.vue";

export default {
  name: "TopArtists",
  components: {
    artistscard
  },
  data() {
    return {
      artists: []
    };
  },
  created() {
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>

<style scoped>
.topartists {
  padding-top: 3.5rem;
}
</style>