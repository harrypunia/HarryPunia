<template>
  <div class="paragraph-image-container" :class="{'paragraph-image-container-right' : right}">
    <div class="paragraph-image" :class="{'paragraph-image-right' : right}">
      <PanImage :src="src" alt="Process Image"/>
    </div>
    <div class="paragraph-image-content">
      <h4 bold class="paragraph-image-title">{{title}}</h4>
      <p resetMargin fillWidth class="paragraph-image-desc">{{desc}}</p>
    </div>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: ['src', 'title', 'desc', 'right'],
    components: {PanImage}
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/paragraphImage";</style>

