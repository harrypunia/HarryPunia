<template>
  <div ref="study" class="caseItem">
    <div class="caseItem-wrapper">
      <div class="clickToOpen"></div>
      <i class="fas fa-times caseItem-close" @click="$emit('close')"></i>
      <div class="caseItem-preview">
        <h3 class="caseItem-title">{{ $t(`caseStudies.${num}.title`) }}</h3>
        <CaseItemTags :tags="['Visual Design', 'Poster', 'Typography', 'Graphics']"/>
      </div>
      <CaseItemImages :num="num" />
      <CaseItemContent />
    </div>
  </div>
</template>

<script>
  import CaseItemTags from "./CaseItemTags"
  import CaseItemImages from "./CaseItemImages"
  import CaseItemContent from "./CaseItemContent"

  export default {
    name: "CaseItem",
    props: [ 'num', 'selection' ],
    components: { CaseItemTags, CaseItemImages, CaseItemContent }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>