<template>
  <div class="nav" :class="'nav-' + state">
    <div class="nav-lang" @click="toggleLang()">
      <i class="icon fab fa-canadian-maple-leaf"></i>
      <p selected ref="en" center small class="nav-lang-titles nav-lang-selected">EN</p>
      <p ref="fr" center small class="nav-lang-titles nav-lang-unselected">FR</p>
    </div>
    <NavTheme @themeUpdated="updateApp($event)" :theme="theme"/>
    <NavButtons :buttons="buttons"/>
  </div>
</template>

<script>
  import NavButtons from "./NavButtons"
  import NavTheme from "./NavTheme"

  export default {
    name: "Nav",
    components: {NavButtons, NavTheme},
    props: ['theme', 'state', 'buttons'],
    data() {
      return {
        animState: this.$props.state,
        activeLang: 'EN'
      }
    },
    methods: {
      updateApp(newTheme) {
        this.$emit('themeChanged', newTheme)
      },
      toggleLang() {
        this.activeLang !== 'FR' ? this.setLang('fr', 'en') : this.setLang('en', 'fr');
      },
      setLang(which, active) {
        this.$i18n.locale = which;
        this.activeLang = which.toUpperCase();
        this.$refs[active].removeAttribute('selected');
        this.$refs[which].setAttribute('selected', '');
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/nav";</style>