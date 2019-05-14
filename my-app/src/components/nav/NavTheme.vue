<template>
  <div class="container">
    <div class="container-column container-left">
       <div ref="Dark" class="container-item Dark" :value="theme" @click="changeTheme('Dark', $event)"></div>
       <div ref="Red" class="container-item Red" :value="theme" @click="changeTheme('Red', $event)"></div>
       <div ref="Light" class="container-item Light" :value="theme" @click="changeTheme('Light', $event)"></div>
    </div>
    <div class="container-column container-right">
       <div ref="Black" class="container-item Black" :value="theme" @click="changeTheme('Black', $event)"></div>
       <div ref="Purple" class="container-item Purple" :value="theme" @click="changeTheme('Purple', $event)"></div>
       <div ref="Wheat" class="container-item Wheat" :value="theme" @click="changeTheme('Wheat', $event)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavTheme",
    props: ['theme'],

    data () {
      return {
        prevTheme : '',
        prevThemeItem: null,
        activeThemeItem: null
      }
    },

    mounted() {
      localStorage.hp_theme == null || undefined ? this.prevTheme = 'Dark' : this.prevTheme = localStorage.hp_theme;
      this.prevThemeItem = this.$refs[this.prevTheme];
      this.regulateCache(this.prevThemeItem);
      this.prevThemeItem.setAttribute('active', '');
      document.body.className = ('theme__' + this.prevTheme);
      this.$emit('themeUpdated', this.prevTheme);
    },
    methods: {
      regulateCache(item) {
        item === undefined || null ? this.prevThemeItem = (localStorage.hp_theme = 'Dark', this.prevTheme = 'Dark', this.prevThemeItem = this.$refs.Dark) : 0;
      },
      changeTheme(which, e) {
        document.body.className = ('theme__' + which);
        this.prevThemeItem.removeAttribute('active');
        e.target.setAttribute('active', '');
        this.prevThemeItem = e.target;
        localStorage.hp_theme = which;
        this.$emit('themeUpdated', which);
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navTheme";</style>