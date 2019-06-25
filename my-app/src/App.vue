<template>
  <div>
    <Loader @loaded="state = 'in'" />
    <Header/>
    <router-view
        :state="state"
        :theme="theme"
        @themeChanged="updateSketch($event)"
    />
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader"
  import Header from "./components/header/Header"

  export default {
    name: 'app',
    components: { Loader, Header },
    data() {
      return {
        theme: 'Red',
        state: 'out',
        transName: 'slide-up'
      }
    },
    methods: {
      updateSketch(newTheme) {this.theme = newTheme},
    }
  }
</script>

<style lang="scss">
  @import "resources/scss/index";
</style>