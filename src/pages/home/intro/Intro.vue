<template>
  <div id="intro" class="intro">
    <Parallax :class="'myImg myImg-' + state" :src="myImg" alt="Harry Punia" speed="0.2"/>
    <IntroInfo class="info" :class="'info-' + state"/>
    <Button action="#" class="intro-button" :class="'button-' + state" dir="horizontal" :text="$t('intro.button')" img="grin-alt" />
    <a hover class="link" :class="'link-' + state">{{ $t('intro.caseStudies') }}</a>
    <IntroBottomNav class="bottomNav" :class="'bottomNav-' + state" />
  </div>
</template>

<script>
  import Parallax from "../../../components/Parallax"
  import Button from "../../../components/button/Button"
  import IntroBottomNav from "./IntroBottomNav"
  import IntroInfo from "./IntroInfo"

  export default {
    name: "Intro",
    components: { Button, IntroBottomNav, IntroInfo, Parallax },
    props: ['state'],
    data() {
      return {
        myImg: require('../../../resources/img/intro/harryPunia.jpg')
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/intro/intro";</style>