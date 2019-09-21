<template>
  <div class="study-process">
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <h4 bold center invert fillWidth>How did we come up with this?</h4>
      <p bold center invert fillWidth>The Ideas that helped us reach here</p>
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
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <DescriptionImage
          v-for="i in 5"
          :key="i"
          :src="getImg(`d${i}.jpg`)"
          :title="msg(`design.${i}.title`)"
          :desc="msg(`design.${i}.desc`)"
      />
    </div>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <DescriptionImage
          v-for="i in 2"
          :key="i"
          :src="getImg(`de${i}.jpg`)"
          :title="msg(`development.${i}.title`)"
          :desc="msg(`development.${i}.desc`)"
      />
    </div>
    <ProcessCode/>
  </div>
</template>

<script>
  import ProcessCode from "./ProcessCode";
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";

  export default {
    name: "caseStudies.1.process",
    components: {ParagraphImage, DescriptionImage, ProcessCode},
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