<template>
  <div class="study-process">
    <BorderTitle>{{msg("design.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 10"
          :key="i"
          :src="getImg(`d${i}.jpg`)"
          :title="msg(`design.${i}.title`)"
          :desc="msg(`design.${i}.desc`)"
      />
    </ZigZag>
    <BorderTitle>{{msg("code.title")}}</BorderTitle>
    <ProcessCode/>
  </div>
</template>

<script>
  import ProcessCode from "./ProcessCode";
  import BorderTitle from "../../../../../components/BorderTitle";
  import ZigZag from "../../../../../components/ZigZag";
  import StudyProcessImage from "../../../../../components/study/StudyProcessImage";

  export default {
    name: "caseStudies.2.process",
    components: {ZigZag, StudyProcessImage, ProcessCode, BorderTitle},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/2/process/${img}`)
      }
    }
  }
</script>