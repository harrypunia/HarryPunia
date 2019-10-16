<template>
  <div>
    <Intro :state="state"/>
    <CaseStudies/>
    <About/>
    <Work/>
    <SocialLinks/>
  </div>
</template>

<script>
  import Intro from "./intro/Intro"
  import CaseStudies from "./caseStudies/CaseStudies"
  import SocialLinks from "../../components/SocialLinks";
  import Work from "./clients/Clients";
  import About from "./about/About";

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: {Intro, CaseStudies, Work, About, SocialLinks},
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