<template>
  <div>
    <Intro :state="state"/>
    <CaseStudies/>
    <About/>
<!--    <Passion/>-->
<!--    <Skills/>-->
    <Work/>
  </div>
</template>

<script>
  import Intro from "./intro/Intro"
  import Passion from "./passion/Passion"
  import Skills from "./skills/Skills"
  import CaseStudies from "./caseStudies/CaseStudies"
  import Work from "./clients/Clients"
  import About from "./about/About"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: {Intro, Passion, Skills, CaseStudies, Work, About},
    methods: {
      updateApp(newTheme) {
        this.$emit('themeChanged', newTheme)
      }
    },
    data() {
      return {
        buttons: [{
          value: 'intro',
          ref: 'intro',
          href: ""
        }, {
          value: 'project',
          ref: 'caseStudies',
          href: ""
        }, {
          value: 'clients',
          ref: 'clients',
          href: ""
        }, {
          value: 'about',
          ref: 'about',
          href: ""
        }]
      }
    }
  }
</script>