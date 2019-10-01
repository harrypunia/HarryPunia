<template>
  <div id="clients" class="clients">
    <Title>{{msg('title')}}</Title>
    <div class="clients-items">
      <ClientItem brandName="neoEvolution" brandColor="#191335" contentColor="#b143e6"/>
      <ClientItem brandName="punias" brandColor="#ffffff" contentColor="#151515" hpRef="https://www.punias.com/"/>
      <ClientItem brandName="firmway" brandColor="#23552a" contentColor="#ffffff" hpRef="https://firmway.in/"/>
      <ClientItem brandName="meraki" brandColor="#323239" contentColor="#84E8A7"/>
    </div>
  </div>
</template>

<script>
  import ClientItem from "./clientItem/ClientItem"
  import Title from "../../../components/Title"

  export default {
    name: "clients",
    components: {ClientItem, Title}
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/clients/clients";</style>