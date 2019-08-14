<template>
  <div class="study-gallery">
    <img :key="image" v-for="image in images" :src="image" alt="Study Gallery Image">
  </div>
</template>

<script>
  export default {
    name: "studyGallery",
    props: ['images'],
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyGallery";</style>