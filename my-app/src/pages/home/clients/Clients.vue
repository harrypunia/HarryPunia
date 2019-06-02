<template>
  <div id="clients" class="clients">
    <h1 title>{{ $t('clients.title') }}</h1>
    <div class="clients-items">
      <ClientItem brandName="neoEvolution" brandColor="#191335" contentColor="#9b30ce" hpRef="https://www.neoEvolution.com/"/>
      <ClientItem brandName="punias" brandColor="#ffffff" contentColor="#151515" hpRef="https://www.punias.com/"/>
      <ClientItem brandName="firmway" brandColor="#23552a" contentColor="#ffffff" hpRef="https://firmway.in/"/>
    </div>
  </div>
</template>

<script>
  import ClientItem from "./ClientItem"

  export default {
    name: "Clients",
    components: { ClientItem }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/clients/clients";</style>