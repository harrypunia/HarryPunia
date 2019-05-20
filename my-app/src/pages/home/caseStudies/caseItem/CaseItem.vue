<template>
  <div ref="study" class="caseItem">
    <div class="caseItem-preview">
      <h3 invert class="caseItem-title">{{ $t(`caseStudies.${num}.title`) }}</h3>
      <CaseItemTags :tags="['Visual Design', 'Poster', 'Typography', 'Graphics']"/>
    </div>
    <div class="caseItem-images">
      <img :src="getImg('alternate')" alt="Preview Case Study">
      <img :src="getImg('preview')" alt="Preview Case Study">
    </div>
  </div>
</template>

<script>
  import CaseItemTags from "./CaseItemTags"

  export default {
    name: "CaseItem",
    props: [ 'num' ],
    components: { CaseItemTags },
    data() {
      return {

      }
    },
    methods: {
      getImg(which) {return require('../../../../resources/img/caseStudies/' + this.num + '/'  + which + '.jpg')},
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>