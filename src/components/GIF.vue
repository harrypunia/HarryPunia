<template>
  <div class="gif-img-container">
    <img class="gif-img" :style="{height}" :class="{hideGif: !isLoad}" :src="src" :alt="alt" @load="isLoad = true">
    <IMG v-if="!isLoad" :heigh="height" :src="preload" :alt="alt"/>
  </div>
</template>

<script>
  import IMG from "./IMG";

  export default {
    props: ['src', 'alt', 'preload', 'height'],
    components: {IMG},
    data() {
      return {
        isLoad: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gif-img {
    position: relative;
    width: 100%;
    object-fit: cover;
    object-position: center;

    &-container {
    }
  }

  .hideGif {
    position: absolute;
    display: none;
  }
</style>