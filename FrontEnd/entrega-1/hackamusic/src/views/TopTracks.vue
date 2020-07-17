<template>
  <div class="toptracks">
    <vue-headful title="Hack A Music | Top Tracks" />
    <h1>Top Tracks</h1>

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

