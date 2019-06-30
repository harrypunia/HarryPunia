<template>
  <div class="study-body">
    <StudyInfoCard>
      <div class="study-button-try">
        <Button :invert="true" dir="horizontal" :text="$t('caseStudies.1.try')" img="arrow-right"/>
      </div>
      <StudyAbout num="1" />
    </StudyInfoCard>
    <StudyInfoCard>
      <h1 invert>{{ $t("g.process") }}</h1>
    </StudyInfoCard>
    <StudyInfoCard>
      <h1 invert>Study Members</h1>
      <StudyTeam :members="members"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../components/button/Button";
  import StudyInfoCard from "../../../components/study/StudyInfoCard";
  import StudyTeam from "../../../components/study/StudyTeam";
  import StudyAbout from "../../../components/study/StudyAbout";

  export default {
    name: "StudyBody",
    components: { Button, StudyInfoCard, StudyTeam, StudyAbout },
    data() {
      return {
        members: [{
          name: "Harry Punia",
          img: "harryPunia.jpg",
          role: "I developed & conceptualised the game"
        }, {
          name: "Lauren Black",
          img: "laurenBlack.jpg",
          role: "I designed the graphics and conceptualized the game",
          visit: "https://www.google.com"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/studies/1/studyBody";</style>