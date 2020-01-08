<template>
  <div class="paragraph-image-container" :class="{'paragraph-image-container-right' : right}">
    <div class="paragraph-image" :class="{'paragraph-image-right' : right}">
      <PanImage
          height="400px"
          :src="src"
          :gif="gif"
          :preload="preload"
          :alt="alt || 'Paragraph Image'"
      />
    </div>
    <div class="paragraph-image-content">
      <h2 class="paragraph-image-title">{{title}}</h2>
      <p resetMargin fillWidth class="paragraph-image-desc">{{desc}}</p>
    </div>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: {
      src: String,
      alt: String,
      preload: String,
      title: String,
      desc: String,
      gif: Boolean,
      right: Boolean
    },
    components: {PanImage}
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/paragraphImage";</style>

