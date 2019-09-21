<template>
  <div class="header">
    <router-link class="header-logo" to="/" :style="{textDecoration: 'none'}">
      <h4 bold>Harry Punia</h4>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    data() {
      return {
        logo: require('../../resources/img/logo/logo.png')
      }
    }
  }

</script>

<style lang="scss">
  @import "../../resources/scss/mixins";

  .header {
    @include posFix(0, 0, false, default);
    @include size(100vw, 50px);
    @include setTheme("background-color", main);
    z-index: 99999;

    @include view(1600px) {
    }

    &-logo {
      width: 200px;
    }

    h4 {
      @include size(160px, auto);
      margin-left: 40px;
      padding: 5px 10px;
      font-weight: 300;
      cursor: pointer;

      @include view(phone) {
        margin-left: 20px;
      }
    }
  }
</style>