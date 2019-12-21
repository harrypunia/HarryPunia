<template>
  <div class="study-process">
    <h1 bold center class="study-process-section-title">Idea</h1>
    <DescriptionImage :src="getImg('idea.png')" :title="msg('idea.title')" :desc="msg('idea.desc')"/>
    <h1 bold center class="study-process-section-title">{{msg('components.title')}}</h1>
    <h3 center>{{msg('components.subtitle')}}</h3>
    <PhotoMontage id="VUI Components" :images="images"/>
    <h1 bold center class="study-process-section-title">{{msg('dev.title')}}</h1>
    <h3 center>{{msg('dev.subtitle')}}</h3>
    <CodeDescription src="6/process/dev-button.png" :title="msg('dev.button.title')" :desc="msg('dev.button.desc')"/>
    <CodeDescription right src="6/process/templating.png" :title="msg('dev.template.title')"
                     :desc="msg('dev.template.desc')"/>
    <CodeDescription src="6/process/type.png" :title="msg('dev.template.title')"
                     :desc="msg('dev.template.desc')"/>
  </div>
</template>

<script>
  import DescriptionImage from "../../../../../components/study/DescriptionImage";
  import ParagraphImage from "../../../../../components/study/ParagraphImage";
  import PhotoMontage from "../../../../../components/PhotoMontage";
  import CodeDescription from "../../../../../components/study/CodeDescription";

  export default {
    name: "caseStudies.6.process",
    components: {CodeDescription, DescriptionImage, ParagraphImage, PhotoMontage},
    data() {
      return {
        images: [
          {
            src: this.getImg("table.png"),
            size: "lg"
          },
          {
            src: this.getImg("card.png"),
            size: "lg"
          },
          {
            src: this.getImg("button.png"),
            size: "lg"
          },
          {
            src: this.getImg("dropdown.png"),
            size: "lg"
          }
        ]
      }
    },
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/6/process/${img}`)
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