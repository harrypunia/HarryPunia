<template>
  <div class="dialog" :class="{'dialog-open' : isOpen}">
    <div class="dialog-container" @click="close"></div>
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['onClose', 'open'],
    watch: {
      open() {
        this.isOpen = this.$props.open;
      }
    },
    data() {
      return {
        isOpen: this.$props.open
      }
    },
    methods: {
      close() {
        this.$props.onClose();
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/dialog";</style>