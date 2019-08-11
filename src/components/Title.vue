<template>
  <div class="title">
    <h1 v-parallax="0.05" class="title-text">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
  export default {
    name: "Title"
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/title";</style>