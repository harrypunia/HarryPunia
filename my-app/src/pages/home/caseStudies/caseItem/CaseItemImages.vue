<template>
  <div class="caseItem-images">
    <div class="caseItem-images-mask">
      <img class="caseItem-images-alternate" :src="alternate" alt="Alternate Case Study" />
      <img class="caseItem-images-preview" :src="preview" alt="Preview Case Study" />
      <div class="caseItem-images-textShadow"></div>
    </div>
  </div>
</template>

<script>
  import Parallax from "../../../../components/Parallax"

  export default {
    name: "CaseItemImages",
    props: [ 'num' ],
    components: { Parallax },
    data() {
      return {
        preview: require(`../../../../resources/img/caseStudies/${this.num}/preview.jpg`),
        alternate: require(`../../../../resources/img/caseStudies/${this.num}/alternate.jpg`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemImages";</style>