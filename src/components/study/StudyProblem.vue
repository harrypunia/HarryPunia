<template>
  <div class="study-problem">
    <div class="study-problem-item">
      <h4 bold invert>
        <i class="fas fa-mountain study-problem-icon"></i>
        {{this.msg('problem')}}
      </h4>
      <p invert>{{this.msg(`${num}.problem`)}}</p>
    </div>
    <div class="study-problem-item">
      <h4 bold invert>
        <i class="fas fa-bullseye study-problem-icon"></i>{{this.msg('solution')}}
      </h4>
      <p invert>{{this.msg(`${num}.solution`)}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "caseStudies",
    props: ["num"]
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyProblem";</style>