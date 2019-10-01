<template>
  <Grid class="footer-buttons-container" justify="center" align="center">
    <router-link to="/" style="margin: 0">
      <Button class="footer-buttons" :invert="true" text="Home" img="home" dir="vertical"/>
    </router-link>
    <ContactMe class="footer-buttons"/>
  </Grid>
</template>

<script>
  import Grid from "./Grid";
  import Button from "./button/Button";
  import ContactMe from "./ContactMe";

  export default {
    props: ['invert'],
    components: {Button, ContactMe, Grid}
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/footerButtons";</style>