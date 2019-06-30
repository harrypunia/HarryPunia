<template>
  <div class="study-about">
    <h1 invert>{{ $t("g.what") }}</h1>
    <p invert>{{ $t(`caseStudies.${num}.what`) }}</p>
    <h1 invert>{{ $t("g.why") }}</h1>
    <p invert>{{ $t(`caseStudies.${num}.why`) }}</p>
    <h1 invert>{{ $t("g.how") }}</h1>
    <p invert>{{ $t(`caseStudies.${num}.how`) }}</p>
  </div>
</template>

<script>
  export default {
    name: "StudyAbout",
    props: [ 'num' ]
  }
</script>

<style lang="scss">
  .study-about p {
    max-width: none;
  }
</style>

