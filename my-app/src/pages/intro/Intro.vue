<template>
  <div class="intro">
    <img class="myImg" :class="'myImg-' + state" src="../../resources/img/intro/harryPunia.jpg" alt="Harry Punia">
    <IntroInfo class="info" :class="'info-' + state"/>
    <Button action="#" class="button" :class="'button-' + state" dir="horizontal" :text="$t('intro.button')" img="grin-alt" />
    <a hover class="link" :class="'link-' + state">{{ $t('intro.caseStudies') }}</a>
    <IntroBottomNav class="bottomNav" :class="'bottomNav-' + state" />
  </div>
</template>

<script>
  import Button from "../../components/button/Button"
  import IntroBottomNav from "./IntroBottomNav"
  import IntroInfo from "./IntroInfo"

  export default {
    name: "Intro",
    components: { Button, IntroBottomNav, IntroInfo },
    props: ['state']
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/intro/intro";</style>