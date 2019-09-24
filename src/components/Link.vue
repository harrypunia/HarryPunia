<template>
  <a rel="noreferrer noopener" target="_new" :href="href">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: ['href']
  }
</script>

<style>

</style>