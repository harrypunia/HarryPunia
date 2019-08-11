<template>
  <div>
    <Nav :state="state" :theme="theme" :buttons="buttons" @themeChanged="updateApp($event)"/>
    <Canvas :theme="theme"/>
    <Intro :state="state"/>
    <Passion/>
    <Skills/>
    <CaseStudies/>
    <Work/>
    <About/>
    <Social/>
  </div>
</template>

<script>
  import Nav from "../../components/nav/Nav"
  import Canvas from "./canvas/Canvas"
  import Intro from "./intro/Intro"
  import Passion from "./passion/Passion"
  import Skills from "./skills/Skills"
  import CaseStudies from "./caseStudies/CaseStudies"
  import Work from "./clients/Clients"
  import About from "./about/About"
  import Social from "./Social/Social"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: {Nav, Canvas, Intro, Passion, Skills, CaseStudies, Work, About, Social},
    methods: {
      updateApp(newTheme) {
        this.$emit('themeChanged', newTheme)
      }
    },
    data() {
      return {
        buttons: [{
          value: 'intro',
          ref: 'intro'
        }, {
          value: 'project',
          ref: 'caseStudies'
        }, {
          value: 'clients',
          ref: 'clients'
        }, {
          value: 'about',
          ref: 'about'
        }]
      }
    }
  }
</script>