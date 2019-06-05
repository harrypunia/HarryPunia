<template>
  <div class="passion">
    <Title :content="$t('passion.title')"/>
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
  import Title from "../../../components/Title"

  export default {
    name: "Passion",
    components: { PassionItem, Title }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/passion/passion";</style>