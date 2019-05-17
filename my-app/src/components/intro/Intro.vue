<template>
  <div class="intro">
    <img class="myImg" :class="'myImg-' + state" src="../../resources/img/intro/harryPunia.jpg" alt="Harry Punia">
    <IntroInfo class="info" :class="'info-' + state"/>
    <Button action="#" class="button" :class="'button-' + state" dir="horizontal" :text="msg.button" img="grin-alt" />
    <a hover href="#" class="link" :class="'link-' + state" v-scroll-to="'#skills'">{{msg.caseStudies}}</a>
    <IntroBottomNav class="bottomNav" :class="'bottomNav-' + state" />
  </div>
</template>

<script>
  import {intro} from "../../resources/locale/en"
  import Button from "../button/Button"
  import IntroBottomNav from "./IntroBottomNav"
  import IntroInfo from "./IntroInfo";

  export default {
    name: "Intro",
    components: { Button, IntroBottomNav, IntroInfo },
    props: ['state'],
    data() {
      return {msg: intro}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/intro/intro";</style>