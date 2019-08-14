<template>
  <div class="passion">
    <Title>{{msg('title')}}</Title>
    <BorderTitle>{{msg('subheading')}}</BorderTitle>
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
  import Title from "../../../components/Title";
  import BorderTitle from "../../../components/BorderTitle";

  export default {
    name: "passion",
    components: {PassionItem, Title, BorderTitle}
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/passion/passion";</style>