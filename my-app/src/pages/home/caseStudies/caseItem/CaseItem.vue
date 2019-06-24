<template>
  <div ref="study" class="caseItem">
    <img class="caseItem-image" :src="preview" alt="Case Study Preview">
    <Tags />
  </div>
</template>

<script>
  import Tags from "../../../../components/Tags"

  export default {
    name: "CaseItem",
    props: [ 'num', 'selection' ],
    components: { Tags },
    data() {
      return {
        preview: require(`../../../../resources/img/caseStudies/${this.props.num}/preview.jpg`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItem";</style>