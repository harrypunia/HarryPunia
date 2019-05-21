<template>
  <div class="caseItemTags">
    <p small center invert :key="tag.key" v-for="tag in tags" class="tag-item" :class="{invert : invert}">{{tag}}</p>
  </div>
</template>

<script>
  export default {
    name: "CaseItemTags",
    props: ['tags', 'invert' ]
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemTags";</style>