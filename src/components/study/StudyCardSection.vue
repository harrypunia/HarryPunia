<template>
  <div class="study-card-section">
    <h3 invert>{{title}}</h3>
    <h4 semiBold invert>{{desc}}</h4>
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