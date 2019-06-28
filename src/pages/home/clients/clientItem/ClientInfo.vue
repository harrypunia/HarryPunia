<template>
  <div class="clientInfo">
    <h4 :style="{color: contentColor}">{{ $t(`clients.${brandName}.type`) }}</h4>
    <p :style="{color: contentColor}">{{ $t(`clients.${brandName}.duration`) }}</p>
    <Tags
        class="clientInfo-tags"
        size="small"
        :background="contentColor"
        :color="brandColor"
        :tags=" $t(`clients.${brandName}.projects`)"
    />
  </div>
</template>

<script>
  import Tags from "../../../../components/Tags"

  export default {
    name: "ClientItem",
    props: [ 'brandName', 'brandColor', 'contentColor' ],
    components: { Tags }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/clients/clientItem/clientInfo";</style>