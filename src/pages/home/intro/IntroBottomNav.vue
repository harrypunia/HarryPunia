<template>
  <div class="bottom-nav-container">
    <ScrollPrompt/>
    <i v-if="false" class="audio fas" :class="audioStatus" @click="mute = !mute"></i>
  </div>
</template>

<script>
  import ScrollPrompt from "../../../components/ScrollPrompt";

  export default {
    name: "IntroBottomNav",
    components: {ScrollPrompt},
    data() {
      return {
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