<template>
  <div class="IMG-container">
    <img class="IMG-container-img" :style="{height}" :src="src" :alt="alt">
<!--    <Grid v-if="!isLoad" center column class="IMG-loader">-->
<!--      <img class="IMG-loader-img" src="../resources/img/icons/img-loader.svg" alt="Loading Image">-->
<!--      <p>{{alt}}</p>-->
<!--    </Grid>-->
  </div>
</template>

<script>
  import Grid from "./Grid";

  export default {
    props: ['src', 'alt', 'height'],
    components: {Grid},
    data() {
      return {
        isLoad: false
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../src/resources/scss/components/IMG";</style>