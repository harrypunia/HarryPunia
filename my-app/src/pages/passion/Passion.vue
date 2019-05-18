<template>
  <div class="passion">
    <h1 class="title">{{ $t('passion.heading') }}</h1>
    <p center faded class="subheading">{{ $t('passion.subheading') }}</p>
    <div class="outline"></div>
    <div class="grid">
      <PassionItem num="1"/>
      <PassionItem num="2"/>
      <PassionItem num="3"/>
      <PassionItem num="4"/>
    </div>
  </div>
</template>

<script>
  import PassionItem from "./PassionItem";
  export default {
    name: "Passion",
    components: { PassionItem }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/passion/passion";</style>