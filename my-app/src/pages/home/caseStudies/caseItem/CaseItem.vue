<template>
  <div ref="study" class="caseItem">
    <img class="caseItem-image" :src="preview" alt="Case Study Preview">
    <CaseItemContent :num="num"/>
  </div>
</template>

<script>
  import CaseItemContent from "./CaseItemContent"

  export default {
    name: "CaseItem",
    props: ['num', 'selection'],
    components: { CaseItemContent },
    data() {
      return {
        preview: require(`../../../../resources/img/caseStudies/${this.num}/preview.jpg`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>