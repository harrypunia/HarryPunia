<template>
  <div class="caseItemContent">
    <div class="content-left">
      <div class="content-left-top">
        <h2 invert class="content-left-top-title">{{ $t('caseStudies.whatTitle') }}</h2>
        <p invert>{{ $t(`caseStudies.${num}.what`) }}</p>
      </div>
      <div class="content-left-mid content-items">
        <h2 invert>{{ $t('caseStudies.rolesTitle') }}</h2>
        <CaseItemTags class="content-tags" :tags="$t(`caseStudies.${num}.tags`)" :invert="true"/>
      </div>
      <div class="content-left-bot content-items">
        <q invert>{{ $t(`caseStudies.${num}.created`) }}</q>
      </div>
    </div>
    <div class="content-right">
      <div class="content-items">
        <h2 invert>{{ $t('caseStudies.detailsTitle') }}</h2>
        <p invert>{{ $t(`caseStudies.${num}.details`) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseItemTags from "./CaseItemTags"
  export default {
    name: "CaseItemContent",
    props: [ 'num' ],
    components: { CaseItemTags }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemContent";</style>