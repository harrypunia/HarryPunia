<template>
  <div class="study-process-image">
    <PanImage :height="height" class="study-process-image-media" :src="src" :alt="alt || 'Description Image'"/>
    <h4 bold class="study-process-image-title">{{title}}</h4>
    <p resetMargin fillWidth class="study-process-image-desc">{{desc}}</p>
  </div>
</template>

<script>
  import PanImage from "../PanImage";

  export default {
    props: ['src', 'title', 'desc', 'alt'],
    components: {PanImage},
    data() {
      return {
        height: window.innerWidth < 1000 ? "400px" : "800px"
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener("resize", () => {
          this.$data.height = window.innerWidth < 1000 ? "400px" : "800px";
        })
      });
    }
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/descriptionImage";</style>

