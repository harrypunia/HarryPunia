<template>
  <Grid :id="id" class="montage" wrap center>
    <Dialog :open="isOpen" :onClose="close">
      <IMG
          :src="selected.src"
          :alt="`${id} gallery image expanded`"
          :class="{'dialog-landscape' : selected.orientation === 'landscape'}"
          class="montage-selected"
      />
    </Dialog>
    <div :key="index" v-for="(image, index) in images" class="montage-image-container"
         :class="{'montage-image-large' : image.size === 'lg'}">
      <IMG
          class="montage-image"
          height="400px"
          :class="{'montage-image-landscape' : image.orientation === 'landscape'}"
          :src="image.src"
          :alt="`${id} gallery image ${index}`"
          @click.native="open(image)"
      />
    </div>
  </Grid>
</template>

<script>
  import Dialog from "./Dialog"
  import Grid from "./Grid";
  import IMG from "../components/IMG";

  export default {
    name: "montage",
    props: ['id', 'images'],
    components: {Grid, Dialog, IMG},
    data() {
      return {
        isOpen: false,
        selected: {
          src: "",
          orientation: "",
        }
      }
    },
    methods: {
      close() {
        this.isOpen = false;
        this.selected = {
          src: "",
          orientation: ""
        }
      },
      open(selected) {
        this.isOpen = true;
        this.selected = selected
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/photoMontage";</style>