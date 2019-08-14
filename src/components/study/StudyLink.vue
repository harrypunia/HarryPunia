<template>
  <a rel="noopener noreferrer" :href="link" class="study-link">
    <i :class="type"></i>
  </a>
</template>

<script>
  export default {
    name: "caseStudies",
    props: ['icon', 'link'],
    data() {
      return {
        type: `fab fa-${this.icon} study-link-icon`
      }
    }
  }
</script>

<style lang="scss">@import "../../resources/scss/components/study/studyLink";</style>

