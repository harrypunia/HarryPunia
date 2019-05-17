<template>
  <div id="skills" class="skills">
    <h1 class="title">{{msg.title}}</h1>
    <SkillItem num="1" :items="[
        {url: 'illustrator.svg', desc: 'Illustrator'},
        {url: 'photoshop.svg', desc: 'PhotoShop'},
        {url: 'inDesign.svg', desc: 'InDesign'}
      ]"/>
    <SkillItem num="2" :items="[
        {url: 'html.svg', desc: 'HTML'},
        {url: 'css.svg', desc: 'CSS'},
        {url: 'javascript.svg', desc: 'Javscript'},
        {url: 'threejs.svg', desc: 'Three JS'},
        {url: 'p5js.png', desc: 'P5 Js'},
      ]"/>
    <SkillItem num="3" :items="[
        {url: 'arduino.png', desc: 'Arduino'},
      ]"/>
    <SkillItem num="4" :items="[
        {url: 'premierpro.svg', desc: 'Premier Pro'},
        {url: 'cinema4d.png', desc: 'Cinema 4D'},
      ]"/>
    </div>
</template>

<script>
  import {skills} from "../../resources/locale/en"
  import SkillItem from "./SkillItem"

  export default {
    name: "Skills",
    components: { SkillItem },
    data() {
      return {
        msg: skills
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/skills/skills";</style>