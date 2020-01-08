<template>
  <div class="study-problem" :class="{'study-problem-noGoal' : isGoal}">
    <div v-if="!isGoal" class="study-problem-item">
      <h4>
        <i class="fas fa-mountain study-problem-icon"></i>
        {{this.msg('problem')}}
      </h4>
      <p>{{this.msg(`${num}.problem`)}}</p>
    </div>
    <div class="study-problem-item">
      <h4>
        <i class="fas fa-bullseye study-problem-icon"></i>
        <span v-if="!isGoal">{{this.msg('solution')}}</span>
        <span v-else>{{this.msg('goal')}}</span>
      </h4>
      <p v-if="!isGoal">{{this.msg(`${num}.solution`)}}</p>
      <p v-else fillWidth>{{this.msg(`${num}.solution`)}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "caseStudies",
    props: ["num", "isGoal"]
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyProblem";</style>