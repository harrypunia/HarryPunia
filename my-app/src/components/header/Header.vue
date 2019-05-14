<template>
  <div class="header">
    <p class="header__logo">Harry Punia</p>
  </div>
</template>

<script>

  export default {
    name: 'Header'
  }

</script>

<style lang="scss">
  @import "../../resources/scss/mixins";

  .header {
    @include size(auto, 50px);
    @include posAbs(80px, 40px, false, default);
  }
</style>