<template>
  <div class="nav-buttons">
    <a  v-for="button in buttons"
        :key="button.key"
        hover
        :href="button.href"
        class="nav-buttons-items"
        @click="scrollTo(button.ref)">
      {{$t(`nav.btn.${button.value}`)}}
    </a>
  </div>
</template>

<script>
  import jump from "jump.js"

  export default {
    name: "NavButtons",
    props: [ 'buttons' ],
    methods: {
      scrollTo: el => jump(`.${el}`)
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/nav/navButtons";</style>