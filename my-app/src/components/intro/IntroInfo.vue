<template>
  <div>
    <h1>{{msg.name}}</h1>
    <h3>{{msg.location}}</h3>
    <q>{{msg.quote}}</q>
  </div>
</template>

<script>
  import {intro} from "../../resources/locale/en"

  export default {
    name: "IntroInfo",
    data() {
      return {msg: intro.info}
    }
  }
</script>

<style lang="scss" scoped></style>