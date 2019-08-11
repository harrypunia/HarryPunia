<template>
  <div class="study-about">
    <div class="study-about-item">
      <h2 bold invert>{{this.msgd("what")}}</h2>
      <p bold invert>{{ this.msg(`${num}.what`) }}</p>
    </div>
    <div class="study-about-item">
      <h2 invert>{{this.msgd("why")}}</h2>
      <p bold invert>{{ this.msg(`${num}.why`) }}</p>
    </div>
    <div class="study-about-item">
      <h2 bold invert>{{this.msgd("how")}}</h2>
      <p bold invert>{{ this.msg(`${num}.how`) }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "caseStudies",
    props: ['num']
  }
</script>

<style lang="scss">
  @import "../../resources/scss/mixins";

  .study-about {
    @include flexGrid(flex-start, flex-start, wrap);

    &-item {
      margin-right: 40px;
    }
  }
</style>

