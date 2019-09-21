<template>
  <div id="intro" class="intro">
    <Dialog
        :open="isContact"
        :onClose="closeContact">
      <ContactCard @close="closeContact"/>
    </Dialog>
    <h1 bold>Harry Punia</h1>
    <div class="info" :class="'info-' + state">
      <p center>{{ this.msg('quote') }}</p>
      <p bold center>{{ this.msg('location') }}</p>
    </div>
    <Button
        action="#"
        class="intro-button"
        :class="'intro-button-' + state" dir="horizontal"
        :text="msg('button')"
        img="grin-alt"
        @click.native="openContact"
    />
    <a @click="scrollTo('caseStudies')" hover class="link" :class="'link-' + state">{{msg("caseStudies")}}</a>
    <ScrollPrompt class="prompt" :class="'prompt-' + state"/>
  </div>
</template>

<script>
  import CaseItem from "../../../pages/home/caseStudies/caseItem/CaseItem";
  import Dialog from "../../../components/Dialog";
  import ContactCard from "../../../components/ContactCard";
  import Parallax from "../../../components/Parallax";
  import Button from "../../../components/button/Button";
  import ScrollPrompt from "../../../components/ScrollPrompt";
  import IntroBottomNav from "./IntroBottomNav"
  import jump from "jump.js"

  export default {
    name: "intro",
    components: {Dialog, ContactCard, Button, ScrollPrompt, IntroBottomNav, Parallax, CaseItem},
    props: ['state'],
    data() {
      return {
        myImg: require('../../../resources/img/intro/harryPunia.jpg'),
        isContact: false
      }
    },
    methods: {
      scrollTo: el => jump(`.${el}`),
      openContact() {
        this.isContact = true
      },
      closeContact() {
        this.isContact = false
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/intro/intro";</style>