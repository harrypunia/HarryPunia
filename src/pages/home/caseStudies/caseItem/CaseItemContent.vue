<template>
  <div class="caseItemContent">
    <h4 invert class="content-title">{{ msg(`${num}.title`) }}</h4>
    <p>{{ msg(`${num}.desc`) }}</p>
    <Tags class="content-tags" size="small" :tags="msg(`${num}.tags`)"/>
  </div>
</template>

<script>
  import Tags from "../../../../components/Tags"

  export default {
    name: "caseStudies",
    props: ['num'],
    components: {Tags}
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemContent";</style>