<template>
  <div class="study-about">
    <div class="study-about-scroll">
      <ScrollPrompt/>
    </div>
    <div class="study-about-title">
      <h1>{{this.msg(`${num}.title`)}}</h1>
      <h4>{{this.msg(`${num}.desc`)}}</h4>
      <Tags class="study-about-tags" size="small" :tags="msg(`${num}.tags`)"/>
    </div>
  </div>
</template>

<script>
  import Tags from "../../components/Tags";
  import ScrollPrompt from "../../components/ScrollPrompt";

  export default {
    name: "caseStudies",
    props: ['num'],
    components: {Tags, ScrollPrompt}
  }
</script>

<style lang="scss">
  @import "../../resources/scss/mixins";

  .study-about {
    @include flexGrid(flex-start, flex-start, wrap);

    &-scroll {
      @include flexGrid(center, center, nowrap);
      transform: translateY(-25px);
      width: 100%;
    }

    &-title {
      width: calc(60% - 40px);
      margin-right: 40px;
    }

    &-tags {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>

