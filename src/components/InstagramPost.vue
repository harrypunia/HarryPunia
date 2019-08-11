<template>
  <blockquote class="instagram-media"
              :data-instgrm-permalink="link"
              data-instgrm-version="12"
              :style="containerCSS"></blockquote>
</template>

<script>
  export default {
    name: "instagram.post",
    props: ['href', 'width'],
    data() {
      return {
        link: "https://www.instagram.com/p/" + this.$props.href,
        containerCSS: {
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: this.$props.width || "540px",
          padding: "0",
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>