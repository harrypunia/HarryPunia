<template>
  <div class="caseItem-images">
    <div class="caseItem-images-mask">
      <img :src="getImg('alternate')" alt="Preview Case Study">
      <img :src="getImg('preview')" alt="Preview Case Study">
      <div class="caseItem-images-textShadow"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CaseItemImages",
    props: [ 'num' ],
    methods: {
      getImg(which) {return require('../../../../resources/img/caseStudies/' + this.num + '/'  + which + '.jpg')},
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemImages";</style>