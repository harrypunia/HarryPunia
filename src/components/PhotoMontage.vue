<template>
  <Grid :id="id" class="montage" wrap center>
    <Dialog :open="isOpen" :onClose="close">
      <img class="montage-selected" :src="selected" :alt="`${id} gallery image expanded`">
    </Dialog>
    <div :key="index" v-for="(image, index) in images" class="montage-image-container">
      <img
          class="montage-image"
          :class="{'montage-image-landscape' : image.orientation === 'landscape'}"
          :src="image.src"
          :alt="`${id} gallery image ${index}`"
          @click="open(image.src)"
      />
    </div>
  </Grid>
</template>

<script>
  import Dialog from "./Dialog"
  import Grid from "./Grid";

  export default {
    name: "montage",
    props: ['id', 'images'],
    components: {Grid, Dialog},
    data() {
      return {
        isOpen: false,
        selected: null
      }
    },
    methods: {
      close() {
        this.isOpen = false;
        this.selected = null
      },
      open(selected) {
        this.isOpen = true;
        this.selected = selected
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/photoMontage";</style>