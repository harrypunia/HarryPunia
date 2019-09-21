<template>
  <div class="scroll" :class="{'scroll-invert': invert}">
    <div class="scroll-dot"></div>
  </div>
</template>

<script>
  export default {
    props: ['invert']
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/scrollPrompt";</style>