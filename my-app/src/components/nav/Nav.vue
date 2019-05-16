<template>
  <div class="nav" :class="'nav-' + state">
    <div class="nav-lang">
      <i class="icon fab fa-canadian-maple-leaf"></i>
      <p center small>{{msg.lang.eng}}</p>
    </div>
    <NavTheme v-on:themeUpdated="updateApp($event)" :theme="theme"/>
    <NavButtons/>
  </div>
</template>

<script>
  import NavButtons from "./NavButtons"
  import NavTheme from "./NavTheme"
  import {nav} from "../../resources/locale/en";

  export default {
    name: "Nav",
    components: { NavButtons, NavTheme },
    props: ['theme', 'state'],
    data() {
      return {
        msg: nav,
        animState: this.$props.state
      }
    },
    methods: {
      updateApp(newTheme) {this.$emit('receivedTheme', newTheme);}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/nav";</style>