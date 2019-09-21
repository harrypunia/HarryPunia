<template>
  <div id="caseStudies" class="caseStudies-container">
    <div class="caseStudies">
      <CaseItem size="xlg" :num="1" :featured="true"/>
      <CaseItem :num="2"/>
      <CaseItem :num="3"/>
      <CaseItem :num="4"/>
    </div>
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"
  import Title from "../../../components/Title"

  export default {
    name: "caseStudies",
    components: {CaseItem, Title},
    data() {
      return {
        selection: 0,
        close: false
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>