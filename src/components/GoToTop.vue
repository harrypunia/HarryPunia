<template>
  <div class="go-to-top" @click="onClick" :class="{'go-to-top-display' : display}">
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
  export default {
    props: ['invert', 'onClick'],
    data() {
      return {
        display: false
      }
    },
    mounted() {
      window.addEventListener("scroll", _ => this.display = window.scrollY > 250);
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/goToTop";</style>