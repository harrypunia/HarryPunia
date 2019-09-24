<template>
  <Grid :center="true" direction="column" class="contact-card">
    <i class="fas fa-times contact-card-close" @click="closeDialog"></i>
    <p ref="copy-success" bold class="contact-card-copied">
      <i class="fas fa-check"></i>&nbsp;&nbsp;Copied to Clipboard
    </p>
    <Grid justify="space-between" align="center" style="width: 100%">
      <p bold invert>+1 (905) 467-8671</p>
      <p invert><i class="fas fa-clipboard contact-card-phone" @click="copy('+19054678671')"></i></p>
    </Grid>
    <Grid justify="space-between" align="center" style="width: 100%">
      <a href="mailto:harry@punias.com" hover invert>harry@punias.com</a>
      <h4 class="contact-card-clipboard" invert>
        <i class="fas fa-clipboard contact-card-phone" @click="copy('harry@punias.com')"></i>
      </h4>
    </Grid>
  </Grid>
</template>

<script>
  import Grid from "../components/Grid";

  export default {
    components: {Grid},
    methods: {
      closeDialog() {
        this.$emit("close");
      },
      copy(val) {
        this.$copyText(val);
        this.$refs['copy-success'].classList.add("contact-card-copied-success");
        setTimeout(() => {
          this.$refs['copy-success'].classList.remove("contact-card-copied-success");
        }, 2000);
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/contactCard";</style>