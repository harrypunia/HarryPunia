<template>
  <div class="bottom-nav-container">
    <div class="scroll">
      <div class="scroll-dot"></div>
    </div>
    <i v-if="false" class="audio fas" :class="audioStatus" @click="mute = !mute"></i>
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

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/intro/introBottomNav";</style>