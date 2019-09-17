<template>
  <div class="border-title">
    <p center faded class="border-title-text" :class="{'border-title-text-invert' : invert}">
      <slot></slot>
    </p>
    <div class="border-title-outline" :class="{'border-title-outline-invert' : invert}"></div>
  </div>
</template>

<script>
  export default {
    props: ['invert']
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/borderTitle";</style>