<template>
  <div class="nav-buttons">
    <div v-for="button in buttons"
         :key="button.key"
         class="nav-buttons-items"
         @click="scrollTo(button.ref)">
      <router-link :to="button.href">{{$t(`nav.btn.${button.value}`)}}</router-link>
    </div>
  </div>
</template>

<script>
  import jump from "jump.js"

  export default {
    props: ['buttons'],
    methods: {
      scrollTo: el => el ? jump(`.${el}`) : false
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButtons";</style>