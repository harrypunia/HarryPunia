<template>
  <Grid justify="space-between" align="center" column class="clientInfo">
    <Grid center class="clientInfo-logo">
      <img class="clientInfo-logo-img" :src="logo" alt="client"/>
    </Grid>
    <div class="clientInfo-extra">
      <h4 :style="{color: contentColor}">{{ msg(`${brandName}.name`) }}</h4>
      <p :style="{color: contentColor}">{{ msg(`${brandName}.duration`) }}</p>
      <Tags
          class="clientInfo-tags"
          size="xSmall"
          :background="contentColor"
          :color="brandColor"
          :tags=" msg(`${brandName}.projects`)"
      />
    </div>
  </Grid>
</template>

<script>
  import Tags from "../../../../components/Tags";
  import Grid from "../../../../components/Grid";

  export default {
    name: "clients",
    props: ['brandName', 'brandColor', 'contentColor'],
    components: {Tags, Grid},
    data() {
      return {
        logo: require(`../../../../resources/img/clients/${this.brandName}.png`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/home/clients/clientItem/clientInfo";</style>