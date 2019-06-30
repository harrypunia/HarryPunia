<template>
  <div class="study-about">
    <h1 invert>{{ $t("g.what") }}</h1>
    <h4 invert>{{ $t(`caseStudies.${num}.what`) }}</h4>
    <h1 invert>{{ $t("g.why") }}</h1>
    <h4 invert>{{ $t(`caseStudies.${num}.why`) }}</h4>
    <h1 invert>{{ $t("g.how") }}</h1>
    <h4 invert>{{ $t(`caseStudies.${num}.how`) }}</h4>
  </div>
</template>

<script>
  export default {
    name: "StudyAbout",
    props: [ 'num' ]
  }
</script>

<style lang="scss">
  .study-about h4 {
    padding-left: 20px;
  }
</style>

