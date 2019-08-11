<template>
  <div id="intro" class="intro">
    <Parallax :class="'myImg myImg-' + state" :src="myImg" alt="Harry Punia" speed="0.2"/>
    <div class="info" :class="'info-' + state">
      <h1>{{ this.msg('name') }}</h1>
      <h3>{{ this.msg('location') }}</h3>
      <q>{{ this.msg('quote') }}</q>
    </div>
    <Button action="#" class="intro-button" :class="'intro-button-' + state" dir="horizontal" :text="this.msg('button')"
            img="grin-alt"/>
    <a hover class="link" :class="'link-' + state">{{this.msg("caseStudies")}}</a>
    <IntroBottomNav class="bottomNav" :class="'bottomNav-' + state"/>
  </div>
</template>

<script>
  import Parallax from "../../../components/Parallax"
  import Button from "../../../components/button/Button"
  import IntroBottomNav from "./IntroBottomNav"

  export default {
    name: "intro",
    components: {Button, IntroBottomNav, Parallax},
    props: ['state'],
    data() {
      return {
        myImg: require('../../../resources/img/intro/harryPunia.jpg')
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/intro/intro";</style>