<template>
  <div class="study-process">
    <BorderTitle>{{msg("concept.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 3"
          :key="i"
          :src="getImg(`c${i}.jpg`)"
          :title="msg(`concept.${i}.title`)"
          :desc="msg(`concept.${i}.desc`)"
      />
    </ZigZag>
    <BorderTitle>{{msg("design.title")}}</BorderTitle>
    <ZigZag>
      <StudyProcessImage
          v-for="i in 7"
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
  import StudyProcessImage from "../../../../../components/study/DescriptionImage";

  export default {
    name: "caseStudies.3.process",
    components: {ZigZag, StudyProcessImage, BorderTitle},
    methods: {
      getImg(img) {
        return require(`../../../../../resources/img/caseStudies/3/process/${img}`)
      }
    }
  }
</script>