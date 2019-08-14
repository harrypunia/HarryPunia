<template>
  <div id="intro" class="intro">
    <Dialog
        :open="isContact"
        :onClose="closeContact">
      <ContactCard @close="closeContact"/>
    </Dialog>
    <Parallax :class="'myImg myImg-' + state" :src="myImg" alt="Harry Punia" speed="0.2"/>
    <div class="info" :class="'info-' + state">
      <h1>{{ this.msg('name') }}</h1>
      <h3>{{ this.msg('location') }}</h3>
      <p>{{ this.msg('quote') }}</p>
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
    <IntroBottomNav class="bottomNav" :class="'bottomNav-' + state"/>
  </div>
</template>

<script>
  import Dialog from "../../../components/Dialog";
  import ContactCard from "../../../components/ContactCard";
  import Parallax from "../../../components/Parallax"
  import Button from "../../../components/button/Button"
  import IntroBottomNav from "./IntroBottomNav"
  import jump from "jump.js"

  export default {
    name: "intro",
    components: {Dialog, ContactCard, Button, IntroBottomNav, Parallax},
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