<template>
  <div class="study-body">
    <StudyInfoCard>
      <a rel="noreferrer noopener" href="https://www.youtube.com/watch?v=UjFoAkkEugs" class="study-button-try">
        <Button dir="horizontal" :text="msg('try')" img="arrow-right"/>
      </a>
      <StudyAbout num="1"/>
    </StudyInfoCard>
    <StudyInfoCard :pressed="true">
      <StudyProblem num="1" />
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.links')">
      <StudyLink icon="github" link="https://github.com/harrypunia/Kinect_game"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.members')">
      <StudyTeam :members="members"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../../components/button/Button";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyProblem from "../../../../components/study/StudyProblem";
  import StudyLink from "../../../../components/study/StudyLink";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";

  export default {
    name: "caseStudies.1",
    components: {Button, StudyInfoCard, StudyProcess, StudyTeam, StudyLink, StudyAbout, StudyProblem},
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
          visit: "http://www.laurenblackdesign.com"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>