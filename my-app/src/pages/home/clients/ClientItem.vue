<template>
  <a :href="hpRef" rel="noreferrer noopener" class="clientItem" :style="{backgroundColor: brandColor, borderColor: contentColor}">
    <div class="clientItem-info">
      <div>
        <h4 :style="{color: contentColor}">{{ $t(`clients.${brandName}.type`) }}</h4>
        <p :style="{color: contentColor}">{{ $t(`clients.${brandName}.duration`) }}</p>
        <Tags
            class="clientItem-tags"
            size="small"
            :background="contentColor"
            :color="brandColor"
            :tags=" $t(`clients.${brandName}.projects`)"
        />
      </div>
      <i :style="{color: contentColor}" class="fas fa-external-link-alt"></i>
    </div>
    <img class="clientItem-logo" :src="getImg(brandName)" alt="client" />
    <h4 :style="{color: contentColor}" class="clientItem-name">{{brandName.toUpperCase()}}</h4>
  </a>
</template>

<script>
  import Tags from "../../../components/Tags"

  export default {
    name: "ClientItem",
    props: [ 'brandName', 'brandColor', 'contentColor', 'hpRef' ],
    components: { Tags },
    methods: {
      getImg(which) {return require('../../../resources/img/clients/' + which + '.png')}
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/clients/clientItem";</style>