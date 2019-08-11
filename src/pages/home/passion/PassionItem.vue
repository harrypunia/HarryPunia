<template>
  <div class="passion-container">
    <img class="passion-img" :src="getImg()" alt="">

    <h3>{{ this.msg(`${num}.title`) }}</h3>
    <p>{{ this.msg(`${num}.desc`) }}</p>
    <div @click="highlightElement">
      <Button class="passion-button" dir="vertical" :text="this.msg('button')" img="arrow-down"/>
    </div>
  </div>
</template>

<script>
  import Button from "../../../components/button/Button"
  import {highlightDiv} from "../../../resources/js"
  import jump from "jump.js"

  export default {
    name: "passion.item",
    components: {Button},
    props: ['num'],
    methods: {
      getImg() {
        return require('../../../resources/img/passion/passionItem' + this.num + '.png')
      },
      highlightElement() {
        highlightDiv(`skill${this.$props.num}`);
        jump(`#skill${this.num}`)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/passion/passionItem";</style>