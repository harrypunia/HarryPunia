<template>
  <div class="study-about">
    <div class="study-about-scroll">
      <ScrollPrompt/>
    </div>
    <div class="study-about-title">
      <h1 resetMargin="">{{this.msg(`${num}.title`)}}</h1>
      <p>{{this.msg(`${num}.desc`)}}</p>
      <Tags class="study-about-tags" size="small" :tags="msg(`${num}.tags`)"/>
    </div>
    <div class="study-about-other">
      <div class="study-about-other-item">
        <p bold resetMargin>My Role</p>
        <p small faded>
          <span :key="index" v-for="(role, index) in this.msg(`${num}.roles`)">
            {{role}} <br/>
          </span>
        </p>
      </div>
      <div class="study-about-other-item">
        <p bold resetMargin>Duration</p>
        <p small faded>{{this.msg(`${num}.duration`)}}</p>
      </div>
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
    @include flexGrid(flex-start, space-between, wrap);

    &-scroll {
      @include flexGrid(center, center, nowrap);
      margin-bottom: 40px;
      transform: translateY(-25px);
      width: 100%;
    }

    &-title {
      width: 50%;
      margin-right: 40px;

      @include view(1000px) {
        width: 100%;
        margin-bottom: 40px;
      }

      @include view(1000px) {
        width: 100%;
        margin-right: 0;
      }
    }

    &-other {
      @include flexGrid(flex-start, flex-end, wrap);
      width: 40%;

      @include view(1000px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      &-item {
        margin: 15px 40px 15px 0;
        width: 40%;

        @include view(100px) {
          margin: 10px 20px 10px 0;
        }

        @include view(phone) {
          margin: 0;
        }
      }
    }

    &-tags {
      width: 100%;
      margin-top: 20px;
    }
  }
</style>

