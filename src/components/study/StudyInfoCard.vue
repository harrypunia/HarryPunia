<template>
  <div class="info-container" :class="[{'pressed' : pressed}, {'no-padding': noPadding}]">
    <h1 center bold resetMargin v-if="title" :invert="!invert">{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "StudyInfoCard",
    props: ['title', 'invert', 'pressed', 'noPadding']
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyInfoCard";</style>