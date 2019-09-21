<template>
  <router-link :to="studyPage" class="caseItem" :class="'caseItem-' + size">
    <img class="caseItem-image" :src="preview" alt="Case Study Preview">
    <CaseItemContent :num="num"/>
  </router-link>
</template>

<script>
  import CaseItemContent from "./CaseItemContent"

  export default {
    name: "caseStudies.item",
    props: ['num', 'selection', 'size'],
    components: {CaseItemContent},
    data() {
      return {
        preview: require(`../../../../resources/img/caseStudies/${this.num}/preview.jpg`),
        studyPage: `/study/${this.num}`
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>