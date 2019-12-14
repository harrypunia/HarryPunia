<template>
  <div class="code-description-container" :class="{'code-description-container-right' : right}">
    <div class="code-description" :class="{'code-description-right' : right}">
      <CodeBlock :src="src" :type="type" :scale="scale" :maxWidth="maxSize"/>
    </div>
    <div class="code-description-content">
      <h4 bold class="code-description-title">{{title}}</h4>
      <p resetMargin fillWidth class="code-description-desc">{{desc}}</p>
    </div>
  </div>
</template>

<script>
  import CodeBlock from "../CodeBlock";

  export default {
    // props: ['src', 'title', 'desc', 'type', 'right'],
    props: {src: String, title: String, desc: String, type: String, right: Boolean},
    components: {CodeBlock},
    data() {
      return {
        scale: window.innerWidth < 800 ? 0.75 : 1.25,
        maxSize: window.innerWidth < 800 ? "350px" : "400px"
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener("resize", () => {
          this.$data.scale = window.innerWidth < 800 ? 0.75 : 1.25;
          this.$data.maxSize = window.innerWidth < 800 ? "350px" : "400px"
        })
      })
    }
  }
</script>

<style scoped lang="scss">@import "../../resources/scss/components/study/codeDescription";</style>

