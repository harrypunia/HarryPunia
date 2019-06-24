<template>
  <div id="caseStudies" class="caseStudies">
    <Title :content="$t('caseStudies.title')" />
    <CaseItem :key="index" v-for="index in 1" :num="index" />
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"
  import Title from "../../../components/Title"

  export default {
    name: "CaseStudies",
    components: { CaseItem, Title },
    data() {
      return {
        selection: 0,
        close: false
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>