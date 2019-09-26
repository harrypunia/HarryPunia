<template>
  <div class="study-card-section">
    <h4 bold style="opacity: .75">{{title}}</h4>
    <p bold>{{desc}}</p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "StudyCardSection",
    props: ['title', 'desc']
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyCardSection";</style>