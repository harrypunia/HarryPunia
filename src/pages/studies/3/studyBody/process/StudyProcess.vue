<template>
  <div class="study-process">
    <h1 bold center class="study-process-section-title">{{msg("concept.title")}}</h1>
    <DescriptionImage :src="getImg('c1.jpg')" :title="msg('concept.1.title')" :desc="msg('concept.1.desc')"/>
    <DescriptionImage :src="getImg('c2.jpg')" :title="msg('concept.2.title')" :desc="msg('concept.2.desc')"/>
    <DescriptionImage :src="getImg('c3.jpg')" :title="msg('concept.3.title')" :desc="msg('concept.3.desc')"/>
    <h1 bold center class="study-process-section-title">{{msg("design.title")}}</h1>
    <DescriptionImage :src="getImg('d1.jpg')" :title="msg('design.1.title')" :desc="msg('design.1.desc')"/>
    <DescriptionImage :src="getImg('d2.jpg')" :title="msg('design.2.title')" :desc="msg('design.2.desc')"/>
    <DescriptionImage :src="getImg('d3.jpg')" :title="msg('design.3.title')" :desc="msg('design.3.desc')"/>
    <DescriptionImage :src="getImg('d4.jpg')" :title="msg('design.4.title')" :desc="msg('design.4.desc')"/>
    <DescriptionImage :src="getImg('d5.jpg')" :title="msg('design.5.title')" :desc="msg('design.5.desc')"/>
    <DescriptionImage :src="getImg('d6.jpg')" :title="msg('design.6.title')" :desc="msg('design.6.desc')"/>
    <DescriptionImage :src="getImg('d7.jpg')" :title="msg('design.7.title')" :desc="msg('design.7.desc')"/>
  </div>
</template>

<script>
  import DescriptionImage from "../../../../../components/study/DescriptionImage";

  export default {
    name: "caseStudies.3.process",
    components: {DescriptionImage},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/3/process/${img}`)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .study-process-section-title {
    margin-top: 60px;
    margin-bottom: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
</style>