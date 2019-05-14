<template>
  <div class="buttons">
    <a hover href="#" class="buttons-items">{{msg[1]}}</a>
    <a hover href="#" class="buttons-items">{{msg[2]}}</a>
    <a hover href="#" class="buttons-items">{{msg[3]}}</a>
    <a hover href="#" class="buttons-items">{{msg[4]}}</a>
  </div>
</template>

<script>
  import {nav} from "../../resources/locale/en.js";

  export default {
    name: "NavButtons",
    data() {
      return {msg: nav.buttons}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButtons";</style>