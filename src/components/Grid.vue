<template>
  <div class="grid"
       :class="{
        'grid-center' : center,
        'grid-column' : column,
        'grid-wrap' : wrap
       }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['center', 'column', 'wrap'],
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/grid";</style>