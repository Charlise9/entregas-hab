<template>
  <div class="toptracks">
    <vue-headful title="Hack A Music | Top Tracks" />

    <trackscard :toptracks="toptracks" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import trackscard from "@/components/TracksCard.vue";

export default {
  name: "TopTracks",
  components: {
    trackscard
  },
  data() {
    return {
      toptracks: []
    };
  },
  created() {
    api
      .getTracks()
      .then(response => (this.toptracks = response.data.tracks.track));
  }
};
</script>



<style scoped>
.toptracks {
  padding-top: 3.5rem;
}
</style>
