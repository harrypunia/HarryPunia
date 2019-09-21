<template>
  <div :class="`study-intro study-intro-${state}`" :style="{opacity: mapOpacity}">
<!--    <div class="study-title">-->
<!--      <h1 center title>{{title}}</h1>-->
<!--    </div>-->
    <video v-if="type === 'video'" class="study-intro-media" autoplay muted loop>
      <source :src="media" type="video/mp4"/>
    </video>
    <img v-else :src="media" class="study-intro-media" alt="Study image"/>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: ['type', 'src', 'title', 'state'],
    data() {
      return {
        media: require(`../../resources/${this.type}/caseStudies/${this.src}`)
      }
    },
    methods: {
      mapOpacity() {

      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyIntro";</style>