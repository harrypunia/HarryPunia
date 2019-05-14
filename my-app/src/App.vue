<template>
  <div>
    <Loader @loaded="state = 'in'" />
    <Canvas :theme="theme" />
    <Header/>
    <Nav :state="state" :theme="theme" @receivedTheme="updateSketch($event)"/>
    <Intro :state="state" />
    <Passion/>
    <Skills/>
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader";
  import Canvas from "./components/canvas/Canvas";
  import Header from "./components/header/Header"
  import Nav from "./components/nav/Nav"
  import Intro from "./components/intro/Intro"
  import Passion from "./components/passion/Passion"
  import Skills from "./components/skills/Skills"
  export default {
    name: 'app',
    components: { Loader, Canvas, Header, Nav, Intro, Passion, Skills },
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
  .preventScroll {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
