<template>
  <Grid justify="space-between" class="header" :class="{'header-shadow': shadow}">
    <router-link class="header-logo" to="/" :style="{textDecoration: 'none'}">
      <h4 bold>Harry Punia</h4>
    </router-link>
    <Link href="/resume.pdf" class="header-resume">
      <p resetMargin bold>Resume</p>
    </Link>
  </Grid>
</template>

<script>
  import Grid from "../Grid";
  import Link from "../Link";

  export default {
    name: 'Header',
    components: {Grid, Link},
    data() {
      return {
        shadow: false
      }
    },
    mounted() {
      window.addEventListener("scroll", () => {
        this.shadow = window.scrollY > 250;
      })
    }
  }

</script>

<style lang="scss">
  @import "../../resources/scss/mixins";

  .header {
    @include posFix(0, 0, false, default);
    @include size(100vw, 60px);
    @include setTheme("background-color", main);
    @include smooth(box-shadow, .6s);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.06);
    padding: 5px;
    z-index: 99999;

    &-shadow {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    &-logo {
      float: left;
      margin: 0;
      width: 200px;
    }

    h4 {
      @include size(160px, auto);
      margin-left: 40px;
      margin-top: 0;
      font-size: 1.3em;
      padding: 5px 10px;
      font-weight: 300;
      cursor: pointer;

      @include view(phone) {
        margin-left: 20px;
      }
    }

    &-resume {
      margin-right: 40px;
    }
  }
</style>