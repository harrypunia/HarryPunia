<template>
  <div class="passion">
    <h1 class="title">{{msg.title}}</h1>
    <p center faded class="subheading">{{msg.subheading}}</p>
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
  import {passion} from "../../resources/locale/en";
  import PassionItem from "./PassionItem";
  export default {
    name: "Passion",
    components: { PassionItem },
    data() {
      return {
        msg: passion
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/passion/passion";</style>