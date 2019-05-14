<template>
  <div class="loader" :class="state">
    <img class="gif" src="../../resources/img/loader/loading.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: "Loader",
    data() {
      return {
        state: 'loader-in',
      }
    },
    created() {
      setTimeout(()=> {
        this.state = 'loader-out';
        this.$emit('loaded', true)
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/loader/loader";</style>