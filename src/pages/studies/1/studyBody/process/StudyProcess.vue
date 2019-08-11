<template>
  <div class="study-process">
    <BorderTitle>{{this.msg("code.title")}}</BorderTitle>
    <ProcessCode/>
  </div>
</template>

<script>
  import ProcessCode from "./ProcessCode";
  import BorderTitle from "../../../../../components/BorderTitle";

  export default {
    name: "caseStudies.1.process",
    components: {ProcessCode, BorderTitle},
    data() {
      return {
        images: []
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../../resources/scss/pages/studies/1/studyProcess";</style>