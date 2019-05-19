<template>
  <div>
    <Canvas :theme="theme" />
    <Intro :state="state" />
    <Passion/>
    <Skills/>
  </div>
</template>

<script>
  import Canvas from "./canvas/Canvas";
  import Intro from "./intro/Intro"
  import Passion from "./passion/Passion"
  import Skills from "./skills/Skills"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: { Canvas, Intro, Passion, Skills }
  }
</script>