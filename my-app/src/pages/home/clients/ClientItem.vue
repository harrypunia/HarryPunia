<template>
  <div :style="{backgroundColor: brandColor, borderColor: contentColor}" class="clientItem">
    <a :href="hpRef" rel="noreferrer noopener"></a>
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
    <img v-parallax="0.05" class="clientItem-logo" :src="logo" alt="client" />
    <h4 :style="{color: contentColor}" class="clientItem-name">{{brandName.toUpperCase()}}</h4>
  </div>
</template>

<script>
  import Tags from "../../../components/Tags"

  export default {
    name: "ClientItem",
    props: [ 'brandName', 'brandColor', 'contentColor', 'hpRef' ],
    components: { Tags },
    data() {
      return {
        logo: require(`../../../resources/img/clients/${this.brandName}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/clients/clientItem";</style>