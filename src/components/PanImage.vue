<template>
  <div class="pan-image-container">
    <GIF v-if="gif" :height="height" class.native="pan-image" :src="src" :preload="preload" :alt="alt"/>
    <IMG v-else :height="height" class.native="pan-image" :src="src" :alt="alt"/>
  </div>
</template>

<script>
  import GIF from "../components/GIF";
  import IMG from "../components/IMG";

  export default {
    props: ['src', 'alt', 'gif', 'preload', 'height'],
    components: {GIF, IMG},
    methods: {
      panImage(e) {
        const relX = e.clientX - e.target.getBoundingClientRect().left;
        const relY = e.clientY - e.target.getBoundingClientRect().top;
        const ratioX = (relX / e.target.offsetWidth) * 100;
        const ratioY = (relY / e.target.offsetHeight) * 100;
        e.target.style.objectPosition = `${ratioX}% ${ratioY}%`
      },
      resetImage(e) {
        e.target.style.objectPosition = "center center";
      }
    }
  }
</script>

<style scoped lang="scss">
  .pan-image {
    position: relative;
    width: 100%;
    height: auto;
  }
</style>