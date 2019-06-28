<template>
  <div :class="landscape ? 'landscape' : 'portrait'" class="parallax">
    <img class="parallax-img" v-parallax="speed" :src="src" :alt="alt">
  </div>
</template>

<script>
  export default {
    name: "Parallax",
    props: [ 'src', 'alt', 'speed', 'landscape', 'breakpoint' ]
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/parallax";</style>