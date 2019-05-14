<template>
  <div class="container">
    <img class="img" :src="getImg()" alt="">
    <h3>{{msg[num].title}}</h3>
    <p>{{msg[num].desc}}</p>
    <Button class="button" dir="vertical" :text="msg.button" img="arrow-down" />
  </div>
</template>

<script>
  import {passion} from "../../resources/locale/en"
  import Button from "../button/Button"

  export default {
    name: "PassionItem",
    components: { Button },
    props: ['num'],
    data() {
      return {
        msg: passion.item
      }
    },
    methods: {
      getImg() {return require('../../resources/img/passion/passionItem' + this.num + '.png')}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/passion/passionItem";</style>