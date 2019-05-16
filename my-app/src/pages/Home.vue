<template>
  <div>
    <Canvas :theme="theme" />
    <Intro :state="state" />
    <Passion/>
    <Skills/>
  </div>
</template>

<script>
  import Canvas from "../components/canvas/Canvas";
  import Intro from "../components/intro/Intro"
  import Passion from "../components/passion/Passion"
  import Skills from "../components/skills/Skills"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: { Canvas, Intro, Passion, Skills }
  }
</script>

<style lang="scss" scoped>

</style>