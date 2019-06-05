<template>
  <div id="caseStudies" class="caseStudies">
    <Title :content="$t('caseStudies.title')" />
    <CaseItem :key="index" v-for="index in 2" :num="index" @click.native="changeStudy(index)" :open="selection === index" @close="closeStudy" />
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
    },
    methods: {
      changeStudy(i) {
        !this.close ? this.selection = i : 0
        this.close = false;
      },
      closeStudy() {
        this.close = true;
        this.selection = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>