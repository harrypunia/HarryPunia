<template>
  <div class="buttons">
    <a hover href="#" class="buttons-items">{{$t('nav.btn.1')}}</a>
    <a hover href="#" class="buttons-items">{{$t('nav.btn.2')}}</a>
    <a hover href="#" class="buttons-items">{{$t('nav.btn.3')}}</a>
    <a hover href="#" class="buttons-items">{{$t('nav.btn.4')}}</a>
  </div>
</template>

<script>
  export default {
    name: "NavButtons"
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButtons";</style>