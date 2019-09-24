<template>
  <div class="code-block-container">
    <div class="code-block" :class="type ? `code-block-theme-${type}` : 'code-block-theme-intellij'">
      <div class="code-block-header">
        <div class="code-block-header-icons">
          <div class="code-block-header-icons-close" @click="close">
            <i class="fas fa-times"></i>
          </div>
          <div class="code-block-header-icons-minimize" @click="minimize">
            <i class="fas fa-window-minimize"></i>
          </div>
          <div class="code-block-header-icons-maximize" @click="maximize">
            <i class="far fa-window-maximize"></i>
          </div>
        </div>
      </div>
      <div class="code-block-body" :class="{'code-block-body-open' : isOpen}">
        <img class="code-block-body-img"
             :src="image" alt="Code Preview"
             :style="isMaxSize ? {width: '600px'} :imageCSS"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CodeBlock",
    props: ['type', 'scale', 'src'],
    data() {
      // eslint-disable-next-line
      const _scale = this.scale ? (typeof this.scale === "number" ? this.scale : console.error("scale should be a number")) : 1;
      const scale = 400 * _scale > 600 ? 600 : 400 * _scale < 200 ? 200 : 400 * _scale;
      return {
        isOpen: true,
        image: require(`../resources/img/caseStudies/${this.src}`),
        isMaxSize: false,
        imageCSS: {
          width: `${scale}px`,
          height: "auto"
        }
      }
    },
    methods: {
      close() {
        this.isOpen = false;
        this.isMaxSize = false;
      },
      minimize() {
        this.isOpen = !this.isOpen;
        this.isOpen === false ? this.isMaxSize = false : null;
      },
      maximize() {
        this.isOpen = true;
        this.isMaxSize = !this.isMaxSize;
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/codeBlock";</style>