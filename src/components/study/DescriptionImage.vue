<template>
  <div class="study-process-image">
    <PanImage class="study-process-image-media" :src="src" alt="Process Image"/>
    <h4 bold class="study-process-image-title">{{title}}</h4>
    <p resetMargin fillWidth class="study-process-image-desc">{{desc}}</p>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: ['src', 'title', 'desc'],
    components: {PanImage}
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/descriptionImage";</style>

