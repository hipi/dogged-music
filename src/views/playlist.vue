<template>asdasd</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const $route = useRoute();
    const playlistId = $route.params.id;
    console.log(
      "🚀 ~ file: playlist.vue ~ line 9 ~ setup ~ playlistId",
      playlistId
    );
  },
};
</script>
