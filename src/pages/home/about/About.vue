<template>
  <div id="about" class="about">
    <Title>{{msg('title')}}</Title>
    <div class="about-wrapper">
      <Parallax breakpoint=1400 class="about-image" speed="0.1" :src="myImg" alt="Harry Punia"/>
      <AboutContent/>
    </div>
  </div>
</template>

<script>
  import AboutContent from "./AboutContent"
  import Parallax from "../../../components/Parallax"
  import Title from "../../../components/Title"

  export default {
    name: "about",
    components: {AboutContent, Parallax, Title},
    data() {
      return {
        myImg: require('../../../resources/img/about/me.png')
      }
    }
  }
</script>

<style lang="scss">@import "../../../resources/scss/pages/home/about/about";</style>