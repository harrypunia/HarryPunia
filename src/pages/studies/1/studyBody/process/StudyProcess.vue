<template>
  <div class="study-process">
    <Grid :center="true" :column="true">
      <h1 bold class="study-process-title" style="margin-top: 0">Generating Ideas for Art Installations</h1>
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
      <h1 bold class="study-process-title">Asset Designs</h1>
      <DescriptionImage
          :src="getImg('d2.jpg')"
          :title="msg('design.2.title')"
          :desc="msg('design.2.desc')"
      />
      <ParagraphImage
          :right="true"
          :src="getImg('d1.jpg')"
          :title="msg('design.1.title')"
          :desc="msg('design.1.desc')"
      />
      <h1 bold class="study-process-title">Game Physics</h1>
      <DescriptionImage
          v-for="i in 2"
          :key="i"
          :src="getImg(`de${i}.jpg`)"
          :title="msg(`development.${i}.title`)"
          :desc="msg(`development.${i}.desc`)"
      />
      <h1 bold class="study-process-title">Character Design</h1>
      <DescriptionImage
          :src="getImg('d3.jpg')"
          :title="msg('design.3.title')"
          :desc="msg('design.3.desc')"
      />
      <ParagraphImage
          :src="getImg('d4.jpg')"
          :title="msg('design.4.title')"
          :desc="msg('design.4.desc')"
      />
      <h1 bold class="study-process-title">Environment</h1>
      <DescriptionImage
          :src="getImg('d5.jpg')"
          :title="msg('design.5.title')"
          :desc="msg('design.5.desc')"
      />
      <ProcessCode/>
    </Grid>
  </div>
</template>

<script>
  import Grid from "../../../../../components/Grid";
  import ProcessCode from "./ProcessCode";
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";

  export default {
    name: "caseStudies.1.process",
    components: {ParagraphImage, DescriptionImage, ProcessCode, Grid},
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