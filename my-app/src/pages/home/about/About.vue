<template>
  <div id="about" class="about">
    <h1 title>{{ $t('about.title') }}</h1>
    <div class="about-wrapper">
      <img class="about-image" src="../../../resources/img/about/me.png" alt="Harry Punia">
      <AboutContent/>
    </div>
  </div>
</template>

<script>
  import AboutContent from "./AboutContent"

  export default {
    name: "About",
    components: { AboutContent }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/about/about";</style>