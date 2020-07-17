<template>
  <div class="home">
    <vue-headful title="Hack A Music | Home" />
    <h1>Top Tags</h1>

    <tagscard :toptags="toptags" />
  </div>
</template>

<script>
import api from "@/api/index.js";
import tagscard from "@/components/TagsCard.vue";

export default {
  name: "Home",
  components: {
    tagscard
  },
  data() {
    return {
      toptags: []
    };
  },
  created() {
    api.getTags().then(response => (this.toptags = response.data.tags.tag));
  }
};
</script>
