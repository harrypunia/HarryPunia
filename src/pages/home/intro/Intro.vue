<template>
  <div id="intro" class="intro">
    <Canvas theme="Light"/>
    <h1 bold>Harry Punia</h1>
    <div class="info" :class="'info-' + state">
      <p center>{{ this.msg('quote') }}</p>
      <p bold center>{{ this.msg('location') }} <i class="fab fa-canadian-maple-leaf"></i></p>
    </div>
    <div class="intro-button" :class="'intro-button-' + state">
      <ContactMe/>
    </div>
    <a @click="scrollTo('caseStudies')" hover class="link" :class="'link-' + state">{{msg("caseStudies")}}</a>
    <ScrollPrompt class="prompt" :class="'prompt-' + state"/>
  </div>
</template>

<script>
  import Canvas from "../canvas/Canvas";
  import ContactMe from "../../../components/ContactMe";
  import ScrollPrompt from "../../../components/ScrollPrompt";
  import jump from "jump.js"

  export default {
    name: "intro",
    components: {ScrollPrompt, ContactMe, Canvas},
    props: ['state'],
    data() {
      return {
        isContact: false
      }
    },
    methods: {
      scrollTo: el => jump(`.${el}`)
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/intro/intro";</style>