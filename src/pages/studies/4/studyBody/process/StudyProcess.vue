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
          v-for="i in 8"
          :key="i"
          :src="getImg(`d${i}.jpg`)"
          :title="msg(`design.${i}.title`)"
          :desc="msg(`design.${i}.desc`)"
      />
    </ZigZag>
  </div>
</template>

<script>
  import BorderTitle from "../../../../../components/BorderTitle";
  import ZigZag from "../../../../../components/ZigZag";
  import StudyProcessImage from "../../../../../components/study/StudyProcessImage";

  export default {
    name: "caseStudies.4.process",
    components: {ZigZag, StudyProcessImage, BorderTitle},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/4/process/${img}`)
      }
    }
  }
</script>