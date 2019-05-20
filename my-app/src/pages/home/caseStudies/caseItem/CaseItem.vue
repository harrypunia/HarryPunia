<template>
  <div ref="study" class="caseItem">
    <i class="fas fa-times caseItem-close"></i>
    <div class="caseItem-preview">
      <h3 invert class="caseItem-title">{{ $t(`caseStudies.${num}.title`) }}</h3>
      <CaseItemTags :tags="['Visual Design', 'Poster', 'Typography', 'Graphics']"/>
    </div>
    <CaseItemImages :num="num" />
  </div>
</template>

<script>
  import CaseItemTags from "./CaseItemTags"
  import CaseItemImages from "./CaseItemImages"

  export default {
    name: "CaseItem",
    props: [ 'num' ],
    components: { CaseItemTags, CaseItemImages }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>