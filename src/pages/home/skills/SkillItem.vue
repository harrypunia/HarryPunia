<template>
  <div class="skill-container">
    <p class="skill-title">{{msg(`${num}.title`)}}</p>
    <div class="wrapper">
      <div class="grid">
        <div :key="item.key" v-for="item in items" class="grid-items">
          <div class="skill-img" :style="{backgroundImage: `url(${item.svg})`}"></div>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skills.item",
    props: ['num', 'items']
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/skills/skillItem";</style>