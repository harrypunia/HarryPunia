<template>
  <div :class="`study-intro study-intro-${state}`">
    <div class="study-title">
      <h1 title>{{state}}</h1>
    </div>
    <video autoplay muted loop>
      <source :src="video" type="video/mp4"/>
    </video>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: [ 'src', 'title', 'state' ],
    data() {
      return {
        video: require(`../../resources/videos/caseStudies/${this.src}`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyIntro";</style>