<template>
  <div class="info-container" :class="[{'transparent' : invert}, {'pressed' : pressed}]">
    <h1 v-if="title" :invert="!invert" class="info-container-title">{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "StudyInfoCard",
    props: [ 'title', 'invert' , 'pressed']
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyInfoCard";</style>