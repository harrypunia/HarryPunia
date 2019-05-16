<template>
  <div>
    <Loader @loaded="state = 'in'" />
    <Header/>
    <Nav :state="state" :theme="theme" @receivedTheme="updateSketch($event)"/>
    <router-view :state="state" :theme="theme" ></router-view>
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader";
  import Header from "./components/header/Header"
  import Nav from "./components/nav/Nav"
  export default {
    name: 'app',
    components: { Loader, Header, Nav },
    data() {
      return {theme: 'Red', state: 'out'}
    },
    methods: {
      updateSketch(newTheme) {this.theme = newTheme},
    }
  }
</script>

<style lang="scss">
  @import "resources/scss/index";
  @import "resources/scss/theme";
</style>