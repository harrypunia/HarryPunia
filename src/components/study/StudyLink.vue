<template>
  <Grid :center="true">
    <a rel="noopener noreferrer" :href="link" class="study-link">
      <i :class="type"></i>
    </a>
  </Grid>
</template>

<script>
  import Grid from "../../components/Grid";

  export default {
    name: "caseStudies",
    props: ['icon', 'link'],
    components: {Grid},
    data() {
      return {
        type: `fab fa-${this.icon} study-link-icon`
      }
    }
  }
</script>

<style lang="scss">@import "../../resources/scss/components/study/studyLink";</style>

