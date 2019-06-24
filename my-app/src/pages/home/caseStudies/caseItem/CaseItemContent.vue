<template>
  <div class="caseItemContent">

  </div>
</template>

<script>
  import CaseItemTags from "../../../../components/Tags"
  export default {
    name: "CaseItemContent",
    props: [ 'num' ],
    components: { CaseItemTags }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemContent";</style>