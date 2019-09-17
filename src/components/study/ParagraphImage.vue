<template>
  <div class="paragraph-image-container">
    <div class="paragraph-image">
      <PanImage :src="src" alt="Process Image"/>
    </div>
    <div class="paragraph-image-content">
      <h4 invert bold class="paragraph-image-title">{{title}}</h4>
      <p invert class="paragraph-image-desc">{{desc}}</p>
    </div>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: ['src', 'title', 'desc'],
    components: {PanImage}
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/paragraphImage";</style>

