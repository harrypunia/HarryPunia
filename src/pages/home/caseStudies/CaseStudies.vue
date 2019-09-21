<template>
  <div id="caseStudies" class="caseStudies-container">
    <div class="caseStudies">
      <CaseItem size="xlg" :num="2" type="personal"/>
      <CaseItem :num="1" type="school"/>
      <CaseItem :num="3" type="school"/>
      <CaseItem :num="4" type="school"/>
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