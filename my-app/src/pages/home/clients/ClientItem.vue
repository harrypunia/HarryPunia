<template>
  <a :href="hpRef" rel="noreferrer noopener" class="clientItem" :style="{backgroundColor: brandColor}">
    <div class="clientItem-info">
      <div>
        <h4 :style="{...setColor}">{{ $t(`clients.${brandName}.type`) }}</h4>
        <p :style="{...setColor}">{{ $t(`clients.${brandName}.duration`) }}</p>
      </div>
      <i :style="{...setColor}" class="fas fa-external-link-alt"></i>
    </div>
    <img class="clientItem-logo" :src="getImg(brandName)" alt="client" />
    <h4 :style="{...setColor}" class="clientItem-name">{{brandName.toUpperCase()}}</h4>
  </a>
</template>

<script>
  export default {
    name: "ClientItem",
    props: [ 'brandName', 'brandColor', 'contentColor', 'hpRef' ],
    data() {
      return {
        setColor: { color: this.contentColor }
      }
    },
    methods: {
      getImg(which) {return require('../../../resources/img/clients/' + which + '.png')},
      getText(what) {return 'clients.' + this.brandName + '.' + what}
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/clients/clientItem";</style>