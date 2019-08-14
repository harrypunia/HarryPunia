<template>
  <div id="skills" class="skills">
    <Title>{{msg('title')}}</Title>
    <SkillItem id="skill1" num="1" :items="[
        {url: 'illustrator.svg', desc: 'Illustrator'},
        {url: 'photoshop.svg', desc: 'PhotoShop'},
        {url: 'inDesign.svg', desc: 'InDesign'}
      ]"/>
    <SkillItem id="skill2" num="2" :items="[
        {url: 'html.svg', desc: 'HTML'},
        {url: 'css.svg', desc: 'CSS'},
        {url: 'javascript.svg', desc: 'Javscript'},
        {url: 'threejs.svg', desc: 'Three JS'},
        {url: 'p5js.png', desc: 'P5 Js'},
      ]"/>
    <SkillItem id="skill3" num="3" :items="[
        {url: 'arduino.png', desc: 'Arduino'},
      ]"/>
    <SkillItem id="skill4" num="4" :items="[
        {url: 'premierpro.svg', desc: 'Premier Pro'},
        {url: 'cinema4d.png', desc: 'Cinema 4D'},
      ]"/>
  </div>
</template>

<script>
  import SkillItem from "./SkillItem"
  import Title from "../../../components/Title"

  export default {
    name: "skills",
    components: {SkillItem, Title}
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/skills/skills";</style>