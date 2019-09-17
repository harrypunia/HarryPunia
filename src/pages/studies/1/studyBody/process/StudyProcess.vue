<template>
  <div class="study-process">
    <BorderTitle :invert="true" class="study-process-title">{{msg("concept.title")}}</BorderTitle>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <DescriptionImage
          :src="getImg('c1.jpg')"
          :title="msg('concept.1.title')"
          :desc="msg('concept.1.desc')"
      />
      <ParagraphImage
          :src="getImg('c2.jpg')"
          :title="msg('concept.2.title')"
          :desc="msg('concept.2.desc')"
      />
    </div>
    <BorderTitle :invert="true" class="study-process-title">{{msg("design.title")}}</BorderTitle>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <DescriptionImage
          v-for="i in 5"
          :key="i"
          :src="getImg(`d${i}.jpg`)"
          :title="msg(`design.${i}.title`)"
          :desc="msg(`design.${i}.desc`)"
      />
    </div>
    <BorderTitle :invert="true" class="study-process-title">{{msg("development.title")}}</BorderTitle>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <DescriptionImage
          v-for="i in 2"
          :key="i"
          :src="getImg(`de${i}.jpg`)"
          :title="msg(`development.${i}.title`)"
          :desc="msg(`development.${i}.desc`)"
      />
    </div>
    <BorderTitle :invert="true" class="study-process-title">{{msg("code.title")}}</BorderTitle>
    <ProcessCode/>
  </div>
</template>

<script>
  import ProcessCode from "./ProcessCode";
  import BorderTitle from "../../../../../components/BorderTitle";
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";

  export default {
    name: "caseStudies.1.process",
    components: {ParagraphImage, DescriptionImage, ProcessCode, BorderTitle},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/1/process/${img}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  .study-process-title {
    margin-top: 80px;
  }
</style>