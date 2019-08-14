<template>
  <div class="info-container" :class="{'transparent' : invert}">
    <h2 :invert="!invert" class="info-container-title">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "StudyInfoCard",
    props: [ 'title', 'invert' ]
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyInfoCard";</style>