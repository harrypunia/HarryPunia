<template>
  <div id="caseStudies" class="caseStudies">
    <h1 title>{{ $t('caseStudies.title') }}</h1>
    <CaseItem :key="index" v-for="index in 2" :num="index" @click.native="selection = index" :open="selection === index" />
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"

  export default {
    name: "CaseStudies",
    components: { CaseItem },
    data() {
      return {
        selection: 0
      }
    },
    methods: {
      openStudy(e) {
        const target = e.currentTarget;
        this.selection = target.id;
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>