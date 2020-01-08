<template>
  <div class="study-process">
    <Grid column center>
      <h1>My role</h1>
      <h3 center light>Starting Mage Royale was a unique experience for me. I am managing a team of 6 meanwhile working as a
        Front-End Developer. My goal is to grow the team further and make this product shine in the market.</h3>
      <h1 bold center class="study-process-section-title">Branding</h1>
      <DescriptionImage
          :src="getImg(`d1.jpg`)"
          :title="msg(`design.1.title`)"
          :desc="msg(`design.1.desc`)"
          alt="Mage Logo"
      />
      <h1 bold center class="study-process-section-title">User Interface</h1>
      <ParagraphImage :src="getImg(`d2.jpg`)" :title="msg(`design.2.title`)" :desc="msg(`design.2.desc`)"/>
      <DescriptionImage :src="getImg(`d3.jpg`)" :title="msg(`design.3.title`)" :desc="msg(`design.3.desc`)"/>
      <ParagraphImage
          right
          gif
          :src="getImg('controls.gif')"
          alt="Mage Controls"
          :preload="getImg('controls.png')"
          :title="msg(`design.controls.title`)"
          :desc="msg(`design.controls.desc`)"
      />
      <ParagraphImage :src="getImg('settings.png')" alt="Mage Settings" :title="msg(`design.settings.title`)"
                      :desc="msg(`design.settings.desc`)"/>
      <h1 bold class="study-process-section-title">Game Assets</h1>
      <ParagraphImage :src="getImg(`d5.jpg`)" :title="msg(`design.5.title`)" :desc="msg(`design.5.desc`)"/>
      <ParagraphImage right :src="getImg(`characters.png`)" :title="msg(`design.characters.title`)"
                      :desc="msg(`design.characters.desc`)"/>
      <DescriptionImage :src="getImg(`d6.png`)" :title="msg(`design.6.title`)" :desc="msg(`design.6.desc`)"/>
      <ParagraphImage right :src="getImg(`d7.jpg`)" :title="msg(`design.7.title`)"
                      :desc="msg(`design.7.desc`)"/>
      <ParagraphImage :src="getImg(`d8.jpg`)" :title="msg(`design.8.title`)" :desc="msg(`design.8.desc`)"/>
      <DescriptionImage :src="getImg(`d9.jpg`)" :title="msg(`design.9.title`)" :desc="msg(`design.9.desc`)"/>
      <DescriptionImage :src="getImg(`d10.jpg`)" :title="msg(`design.10.title`)" :desc="msg(`design.10.desc`)"/>
      <ProcessCode/>
    </Grid>
  </div>
</template>

<script>
  import ProcessCode from "./ProcessCode";
  import Grid from "../../../../../components/Grid";
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";

  export default {
    name: "caseStudies.2.process",
    components: {DescriptionImage, ParagraphImage, ProcessCode, Grid},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/2/process/${img}`)
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