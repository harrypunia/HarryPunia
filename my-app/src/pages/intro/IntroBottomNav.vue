<template>
  <div class="container">
    <div class="scroll">
      <div class="scroll-dot"></div>
    </div>
    <i class="audio fas" :class="audioStatus" @click="mute = !mute"></i>
  </div>
</template>

<script>
  export default {
    name: "IntroBottomNav",
    data() {
      return{
        mute: false
      }
    },
    computed: {
      audioStatus() {
        return this.mute ? 'fa-volume-up' : 'fa-volume-mute';
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/intro/introBottomNav";</style>