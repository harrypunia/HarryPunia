<template>
  <div class="info-container" :class="{'transparent' : invert}">
    <h1 :invert="!invert">{{title}}</h1>
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