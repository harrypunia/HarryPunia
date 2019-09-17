<template>
  <img class="pan-image" :src="src" :alt="alt" @mousemove="panImage" @mouseout="resetImage"/>
</template>

<script>
  export default {
    props: ['src', 'alt'],
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
    height: 100%;
    object-fit: cover;
  }
</style>