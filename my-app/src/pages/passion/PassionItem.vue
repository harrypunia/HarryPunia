<template>
  <div class="container">
    <img class="img" :src="getImg()" alt="">
    <h3>{{ $t(`passion.item.${num}.title` )}}</h3>
    <p>{{ $t(`passion.item.${num}.desc`) }}</p>
    <div @click="highlightElement">
      <Button class="button" dir="vertical" :text="$t('passion.item.button')" img="arrow-down" />
    </div>
  </div>
</template>

<script>
  import Button from "../../components/button/Button"
  import { highlightDiv } from "../../resources/js/index"
  import jump from "jump.js"

  export default {
    name: "PassionItem",
    components: { Button },
    props: ['num'],
    methods: {
      getImg() {return require('../../resources/img/passion/passionItem' + this.num + '.png')},
      highlightElement() {highlightDiv(`skill${this.$props.num}`); jump(`#skill${this.num}`)}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/passion/passionItem";</style>