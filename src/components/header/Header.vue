<template>
  <div class="header">
    <h4>Harry Punia</h4>
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
    @include size(200px, 50px);
    @include posAbs(80px, 40px, false, default);

    h4 {
      font-weight: 300;
    }
  }
</style>