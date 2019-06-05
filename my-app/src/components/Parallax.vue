<template>
  <div :class="landscape ? 'landscape' : 'portrait'" class="parallax" @click="fetchParentOffset($event)">
    <img v-parallax="speed" :src="src" :alt="alt">
  </div>
</template>

<script>
  export default {
    name: "Parallax",
    props: [ 'src', 'alt', 'speed', 'landscape' ],
    methods: {
      fetchParentOffset(e) {
        console.log(e.currentTarget.offsetParent.offsetTop);
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/parallax";</style>