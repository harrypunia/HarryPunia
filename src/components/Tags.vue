<template>
  <div class="tags-container">
    <p :stroke="stroke"
       :size="size"
       small
       center
       invert
       :key="tag.key"
       :style="{backgroundColor: background, color: color}"
       v-for="tag in tags" class="tags"
       :class="{invert : invert}"
    >
      {{tag}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Tags",
    props: ['tags', 'invert', 'size', 'stroke', 'background', 'color']
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/tags";</style>