<template>
  <div class="study-process-image">
    <h4 invert bold class="study-process-image-title">{{title}}</h4>
    <img :src="src" alt="Process Image" @mousemove="panImage" @mouseout="resetImage"/>
    <p invert small class="study-process-image-desc">{{desc}}</p>
  </div>
</template>

<script>
  export default {
    props: ['src', 'title', 'desc'],
    methods: {
      panImage(e) {
        const relX = e.clientX - e.target.getBoundingClientRect().left;
        const relY = e.clientY - e.target.getBoundingClientRect().top;
        const ratioX = (relX / e.target.offsetWidth) * 100;
        const ratioY = (relY / e.target.offsetHeight) * 100;
        e.target.style.objectPosition = `${ratioX}% ${ratioY}%`
      },
      resetImage(e) {
        e.target.style.objectPosition = "center center";
      }
    }
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/studyProcessImage";</style>

