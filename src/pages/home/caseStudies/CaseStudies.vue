<template>
  <div id="caseStudies" class="caseStudies-container">
    <div class="caseStudies">
      <img class="caseStudies-avatar" src="../../../resources/img/about/avatar.svg" alt="Harry Avatar"
           @click="dialog = Math.floor(Math.random() * 5)"/>
      <p small invert class="caseStudies-avatar-dialog">{{this.dialogs[this.dialog]}}</p>
      <CaseItem size="xlg" :num="2" type="personal"/>
      <CaseItem :num="1" type="school"/>
      <CaseItem :num="3" type="school"/>
      <CaseItem :num="4" type="school"/>
      <CaseItem :num="5" type="personal"/>
    </div>
  </div>
</template>

<script>
  import CaseItem from "./caseItem/CaseItem"

  export default {
    name: "caseStudies",
    components: {CaseItem},
    data() {
      return {
        dialog: Math.floor(Math.random() * 5),
        dialogs: [
          "How are you doing today?",
          "Check out some cool projects I am working on",
          "Want to get in touch? Try the button above.",
          "Grab some coffee and explore interesting projects.",
          "Hope you're having a wonderful day today"],
        selection: 0,
        close: false
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/caseStudies/caseStudies";</style>