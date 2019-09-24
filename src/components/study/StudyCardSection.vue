<template>
  <div class="study-card-section">
    <h3>{{title}}</h3>
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