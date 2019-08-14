<template>
  <div class="study-process">
    <BorderTitle>{{msg("concept.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 2"
          :key="i"
          :src="getImg(`c${i}.jpg`)"
          :title="msg(`concept.${i}.title`)"
          :desc="msg(`concept.${i}.desc`)"
      />
    </ZigZag>
    <BorderTitle>{{msg("design.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 5"
          :key="i"
          :src="getImg(`d${i}.jpg`)"
          :title="msg(`design.${i}.title`)"
          :desc="msg(`design.${i}.desc`)"
      />
    </ZigZag>
    <BorderTitle>{{msg("development.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 2"
          :key="i"
          :src="getImg(`de${i}.jpg`)"
          :title="msg(`development.${i}.title`)"
          :desc="msg(`development.${i}.desc`)"
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
    name: "caseStudies.1.process",
    components: {ZigZag, StudyProcessImage, ProcessCode, BorderTitle},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/1/process/${img}`)
      }
    }
  }
</script>