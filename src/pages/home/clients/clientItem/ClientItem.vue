<template>
  <a :href="hpRef"
     target="_new"
     rel="noopener noreferrer"
     class="clientItem"
     :class="{clientItemNoLink : !hpRef}"
     :style="{backgroundColor: brandColor, borderColor: contentColor}">
    <div class="clientItem-info">
      <ClientInfo :brandName="brandName" :brandColor="brandColor" :contentColor="contentColor"/>
      <i v-if="hpRef" :style="{color: contentColor}" class="fas fa-external-link-alt"></i>
      <i v-else :style="{color: contentColor}" class="fas fa-ban"></i>
    </div>
    <!--<h4 :style="{color: contentColor}" class="clientItem-name">{{msg(`${brandName}.type`)}}</h4>-->
  </a>
</template>

<script>
  import ClientInfo from "./ClientInfo"

  export default {
    name: "clients",
    props: ['brandName', 'brandColor', 'contentColor', 'hpRef'],
    components: {ClientInfo},
    data() {
      return {
        logo: require(`../../../../resources/img/clients/${this.brandName}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/clients/clientItem/clientItem";</style>