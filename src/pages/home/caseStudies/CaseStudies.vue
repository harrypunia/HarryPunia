<template>
  <div id="caseStudies" class="caseStudies">
    <Title>{{msg('title')}}</Title>
    <CaseItem :key="index" v-for="index in 4" :num="index" />
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"
  import Title from "../../../components/Title"

  export default {
    name: "caseStudies",
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