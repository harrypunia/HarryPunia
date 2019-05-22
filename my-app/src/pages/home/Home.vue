<template>
  <div>
    <Canvas :theme="theme" />
    <Intro :state="state" />
    <Passion/>
    <Skills/>
    <CaseStudies/>
    <Work/>
  </div>
</template>

<script>
  import Canvas from "./canvas/Canvas"
  import Intro from "./intro/Intro"
  import Passion from "./passion/Passion"
  import Skills from "./skills/Skills"
  import CaseStudies from "./caseStudies/CaseStudies"
  import Work from "./work/Work"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: { Canvas, Intro, Passion, Skills, CaseStudies, Work }
  }
</script>