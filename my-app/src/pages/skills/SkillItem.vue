<template>
  <div class="container">
    <p class="skill-title">{{ $t(`skills.item.${num}.title`) }}</p>
    <div class="wrapper">
      <div class="grid">
        <div :key="item.key" v-for="item in items" class="grid-items">
          <img class="img" :src="getImg(item.url)" alt="Design Skill"/>
          <p>{{item.desc}}</p>
        </div>
      </div>
      <Button class="button" dir="vertical" :text="$t('skills.item.button')" img="arrow-down" />
    </div>
  </div>
</template>

<script>
  import Button from "../../components/button/Button"
  export default {
    name: "SkillItem",
    components: { Button },
    props: [ 'num', 'items' ],
    methods: {
      getImg(name) {return require('../../resources/img/skills/' + name)}
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/skills/skillItem";</style>