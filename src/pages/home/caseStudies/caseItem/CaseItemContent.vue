<template>
  <div class="caseItemContent">
    <h4 invert class="content-title">{{ $t(`caseStudies.${num}.title`) }}</h4>
    <p>{{ $t(`caseStudies.${num}.desc`) }}</p>
    <Tags class="content-tags" size="small" :tags="$t(`caseStudies.${num}.tags`)" />
  </div>
</template>

<script>
  import Tags from "../../../../components/Tags"

  export default {
    name: "CaseItemContent",
    props: [ 'num' ],
    components: { Tags }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemContent";</style>