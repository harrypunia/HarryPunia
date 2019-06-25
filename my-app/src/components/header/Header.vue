<template>
  <div class="header">
    <img class="header-logo" :src="logo" alt="Logo" />
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
    @include size(50px, 50px);
    @include posAbs(80px, 40px, false, default);

    &-logo {
      @include size(100%, auto);
    }
  }
</style>