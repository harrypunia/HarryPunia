<template>
  <div class="skill-container">
    <p class="skill-title">{{this.msg(`${num}.title`)}}</p>
    <div class="wrapper">
      <div class="grid">
        <div :key="item.key" v-for="item in items" class="grid-items">
          <img class="skill-img" :src="getImg(item.url)" alt="Design Skill"/>
          <p>{{item.desc}}</p>
        </div>
      </div>
      <Button class="skill-button" dir="vertical" :text="this.msg('button')" img="arrow-down"/>
    </div>
  </div>
</template>

<script>
  import Button from "../../../components/button/Button"

  export default {
    name: "skills.item",
    components: {Button},
    props: ['num', 'items'],
    methods: {
      getImg(name) {
        return require('../../../resources/img/skills/' + name)
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/skills/skillItem";</style>