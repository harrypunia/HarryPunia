<template>
  <div class="loader" :class="{ 'loader-out' : state}">
    <h1>I'm Harry Punia</h1>
  </div>
</template>

<script>
  export default {
    name: "Loader",
    props: [ "toggle" ],
    data() {
      return {
        state: false,
      }
    },
    created() {
      setTimeout(()=> {
        this.state = true;
        this.$emit('loaded', true)
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/loader/loader";</style>