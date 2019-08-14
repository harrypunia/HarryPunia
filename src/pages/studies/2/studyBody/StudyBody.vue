<template>
  <div class="study-body">
    <StudyInfoCard>
      <a rel="noopener noreferrer" href="https://github.com/harrypunia/Mage-Royale" class="study-button-try">
        <Button :invert="true" dir="horizontal" :text="msg('try')" img="arrow-right"/>
      </a>
      <StudyAbout num="2"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.links')">
      <StudyLink icon="github" link="https://github.com/harrypunia/Mage-Royale"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.members')">
      <StudyTeam :members="members"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../../components/button/Button";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyLink from "../../../../components/study/StudyLink";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";

  export default {
    name: "caseStudies.2",
    components: {Button, StudyInfoCard, StudyProcess, StudyTeam, StudyLink, StudyAbout},
    data() {
      return {
        members: [{
          name: "Harry Punia",
          img: "harryPunia.jpg",
          role: "I developed, designed, conceptualized the game & managed the team"
        }, {
          name: "Lauren Black",
          img: "laurenBlack.jpg",
          role: "I designed the graphics and conceptualized the game",
          visit: "http://www.laurenblackdesign.com"
        }, {
          name: "Omar Elbanby",
          img: "omarElbanby.jpg",
          role: "I handled the backend and data structuring for the game",
          visit: "https://www.linkedin.com/in/elbanby/"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>