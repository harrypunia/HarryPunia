<template>
  <div class="study-process">
    <h1 bold center class="study-process-section-title">Ideation</h1>
    <DescriptionImage :src="getImg('c1.jpg')" :title="msg('concept.1.title')" :desc="msg('concept.1.desc')"/>
    <DescriptionImage :src="getImg('c2.jpg')" :title="msg('concept.2.title')" :desc="msg('concept.2.desc')"/>
    <h1 bold center class="study-process-section-title">{{msg("design.title")}}</h1>
    <ParagraphImage :src="getImg('d1.jpg')" :title="msg('design.1.title')" :desc="msg('design.1.desc')"/>
    <ParagraphImage :right="true" :src="getImg('d2.jpg')" :title="msg('design.2.title')" :desc="msg('design.2.desc')"/>
    <DescriptionImage :src="getImg('d3.jpg')" :title="msg('design.3.title')" :desc="msg('design.3.desc')"/>
    <h1 bold center class="study-process-section-title">Construction</h1>
    <DescriptionImage :src="getImg('d4.jpg')" :title="msg('design.4.title')" :desc="msg('design.4.desc')"/>
    <DescriptionImage :src="getImg('d5.jpg')" :title="msg('design.5.title')" :desc="msg('design.5.desc')"/>
    <h1 bold center class="study-process-section-title">Implementation</h1>
    <ParagraphImage :src="getImg('d6.jpg')" :title="msg('design.6.title')" :desc="msg('design.6.desc')"/>
    <ParagraphImage :right="true" :src="getImg('d7.jpg')" :title="msg('design.7.title')" :desc="msg('design.7.desc')"/>
    <DescriptionImage :src="getImg('d8.jpg')" :title="msg('design.8.title')" :desc="msg('design.8.desc')"/>
  </div>
</template>

<script>
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";

  export default {
    name: "caseStudies.4.process",
    components: {DescriptionImage, ParagraphImage},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/4/process/${img}`)
      }
    }
  }
</script>

<style lang="scss">
  .study-process-section-title {
    margin-top: 60px;
    margin-bottom: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
</style>