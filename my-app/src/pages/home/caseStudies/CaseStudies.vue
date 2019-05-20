<template>
  <div id="caseStudies" class="caseStudies">
    <h1 title>{{ $t('caseStudies.title') }}</h1>
    <CaseItem num="1" open  @click="openStudy($event)"/>
    <CaseItem num="2" open />
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"

  export default {
    name: "CaseStudies",
    components: { CaseItem },
    data() {
      return {
      }
    },
    methods: {
      openStudy(e) {
          console.log(e);
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>