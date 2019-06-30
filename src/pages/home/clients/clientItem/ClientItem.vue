<template>
  <a :href="hpRef" rel="noopener noreferrer" :style="{backgroundColor: brandColor, borderColor: contentColor}" class="clientItem">
    <div class="clientItem-info">
        <ClientInfo :brandName="brandName" :brandColor="brandColor" :contentColor="contentColor"/>
        <i :style="{color: contentColor}" class="fas fa-external-link-alt"></i>
      </div>
    <img v-parallax="0.05" class="clientItem-logo" :src="logo" alt="client" />
    <h4 :style="{color: contentColor}" class="clientItem-name">{{brandName.toUpperCase()}}</h4>
  </a>
</template>

<script>
  import ClientInfo from  "./ClientInfo"

  export default {
    name: "ClientItem",
    props: [ 'brandName', 'brandColor', 'contentColor', 'hpRef' ],
    components: { ClientInfo },
    data() {
      return {
        logo: require(`../../../../resources/img/clients/${this.brandName}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/clients/clientItem/clientItem";</style>