<template>
  <div class="container">
    <img class="img" :src="getImg()" alt="">
    <h3>{{ $t(`passion.item.${num}.title` )}}</h3>
    <p>{{ $t(`passion.item.${num}.desc`) }}</p>
    <Button class="button" dir="vertical" :text="$t('passion.item.button')" img="arrow-down" />
  </div>
</template>

<script>
  import Button from "../../components/button/Button"

  export default {
    name: "PassionItem",
    components: { Button },
    props: ['num'],
    methods: {
      getImg() {return require('../../resources/img/passion/passionItem' + this.num + '.png')}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/passion/passionItem";</style>