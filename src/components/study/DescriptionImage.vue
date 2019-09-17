<template>
  <div class="study-process-image">
    <h4 invert bold class="study-process-image-title">{{title}}</h4>
    <PanImage :src="src" alt="Process Image"/>
    <p invert small class="study-process-image-desc">{{desc}}</p>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: ['src', 'title', 'desc'],
    components: {PanImage}
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/studyProcessImage";</style>

