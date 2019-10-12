<template>
  <div class="loader" :class="{ 'loader-out' : state}">
    <h1>{{phrases[index]}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Loader",
    props: ["toggle"],
    data() {
      return {
        state: false,
        index: Math.floor(Math.random() * 6),
        phrases: [
          "Harry 💘 Development",
          "Harry 💘 Design",
          "Harry plays 🏓",
          "Harry 💘 🐶",
          "Harry 💘 🔴 color",
          "Harry is from 🇨🇦"
        ]
      }
    },
    created() {
      setTimeout(() => {
        this.state = true;
        this.$emit('loaded', true)
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/loader/loader";</style>