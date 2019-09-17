<template>
  <div id="skills" class="skills">
    <Title>{{msg('title')}}</Title>
    <SkillItem id="skill1" num="1" :items="designSkills"/>
<!--    <SkillItem id="skill2" num="2" :items="[-->
<!--        {url: 'html.svg', desc: 'HTML'},-->
<!--        {url: 'css.svg', desc: 'CSS'},-->
<!--        {url: 'javascript.svg', desc: 'Javscript'},-->
<!--        {url: 'threejs.svg', desc: 'Three JS'},-->
<!--        {url: 'p5js.png', desc: 'P5 Js'},-->
<!--        {url: 'graphql.png', desc: 'GraphQl'},-->
<!--      ]"/>-->
<!--    <SkillItem id="skill3" num="3" :items="[-->
<!--        {url: 'arduino.png', desc: 'Arduino'},-->
<!--        {url: 'premierpro.svg', desc: 'Premier Pro'},-->
<!--        {url: 'cinema4d.png', desc: 'Cinema 4D'},-->
<!--      ]"/>-->
  </div>
</template>

<script>
  import designSkills from "../../../resources/img/skills/designSkills"
  import SkillItem from "./SkillItem"
  import Title from "../../../components/Title"

  export default {
    name: "skills",
    components: {SkillItem, Title},
    data() {
      return {
        designSkills,
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/skills/skills";</style>