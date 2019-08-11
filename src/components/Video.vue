<!--TODO: FIX THIS-->
<template>
  <div class="video">
    <img ref="image" v-if="!isLoaded" :src="this.fallback" alt="">
    <video ref="render" class="study-intro-media" autoplay muted loop>
      <source :src="this.src" type="video/mp4"/>
    </video>
  </div>
</template>

<script>
  export default {
    name: "fallbackVideo",
    props: ['src', 'fallback'],
    mounted() {
      this.$refs["render"].onloadeddata = () => {
        this.isLoaded = true;
      }
    },
    data() {
      return {
        isLoaded: false
      }
    }
  }
</script>