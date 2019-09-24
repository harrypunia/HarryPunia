<template>
  <div class="study-body">
    <StudyInfoCard>
      <StudyAbout num="2"/>
    </StudyInfoCard>
    <StudyInfoCard :pressed="true">
      <StudyProblem num="2" :isGoal="true"/>
    </StudyInfoCard>
    <StudyInfoCard>
      <StudyTeam :members="members"/>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="this.msgd('caseStudies.links')">
      <StudyLink icon="github" link="https://github.com/harrypunia/Mage-Royale"/>
    </StudyInfoCard>
    <StudyInfoCard>
      <hr>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="'Other Projects'">
      <StudyMore :num="2"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import StudyProblem from "../../../../components/study/StudyProblem";
  import StudyMore from "../../../../components/study/StudyMore";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyLink from "../../../../components/study/StudyLink";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";

  export default {
    name: "caseStudies.2",
    components: {StudyMore, StudyProblem, StudyInfoCard, StudyProcess, StudyTeam, StudyLink, StudyAbout},
    data() {
      return {
        members: [{
          name: "Harry Punia",
          img: "harryPunia.jpg",
          position: "Project Manager",
          role: "I developed, designed, conceptualized the game & managed the team"
        }, {
          name: "Lauren Black",
          img: "laurenBlack.jpg",
          position: "Designer",
          role: "I designed the graphics and conceptualized the game",
          visit: "http://www.laurenblackdesign.com"
        }, {
          name: "Omar Elbanby",
          img: "omarElbanby.jpg",
          position: "Back-End",
          role: "I handled the backend and data structuring for the game",
          visit: "https://www.linkedin.com/in/elbanby/"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>