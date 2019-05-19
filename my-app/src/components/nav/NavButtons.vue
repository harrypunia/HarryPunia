<template>
  <div class="buttons">
    <a hover href="#" class="buttons-items" @click="scrollTo($t('nav.btn.1'))">{{$t('nav.btn.1')}}</a>
    <a hover href="#" class="buttons-items" @click="scrollTo($t('nav.btn.2'))">{{$t('nav.btn.2')}}</a>
    <a hover href="#" class="buttons-items" @click="scrollTo($t('nav.btn.3'))">{{$t('nav.btn.3')}}</a>
    <a hover href="#" class="buttons-items" @click="scrollTo($t('nav.btn.4'))">{{$t('nav.btn.4')}}</a>
  </div>
</template>

<script>
  import jump from "jump.js"

  export default {
    name: "NavButtons",
    methods: {
      scrollTo: el => jump(`.${el}`)
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButtons";</style>