<template>
  <div class="title">
    <h1 v-parallax="0.1" class="title-text">{{content}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: [ 'content' ]
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/title";</style>