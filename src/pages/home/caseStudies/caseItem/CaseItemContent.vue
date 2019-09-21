<template>
  <div class="caseItemContent">
    <h4 invert class="content-title">{{ msg(`${num}.title`) }}</h4>
    <p>{{ msg(`${num}.desc`) }}</p>
    <Tags class="content-tags" size="small" :tags="msg(`${num}.tags`)"/>
    <div class="content-type">
      <p small v-if="type === 'school'">
        <i class="fas fa-university"></i>&nbsp;&nbsp;School Project
      </p>
      <p small v-else-if="type === 'personal'">
        <i class="fab fa-product-hunt"></i>&nbsp;&nbsp;Personal Project
      </p>
      <p small v-else-if="type === 'client'">
        <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Client Project
      </p>
    </div>
  </div>
</template>

<script>
  import Tags from "../../../../components/Tags"

  export default {
    name: "caseStudies",
    props: ['num', 'type'],
    components: {Tags}
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/caseStudies/caseItemContent";</style>