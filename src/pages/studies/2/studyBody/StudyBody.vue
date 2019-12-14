<template>
  <div class="study-body">
    <StudyInfoCard>
      <StudyAbout num="2"/>
    </StudyInfoCard>
    <StudyInfoCard :pressed="true">
      <StudyProblem num="2" :isGoal="true"/>
    </StudyInfoCard>
    <StudyInfoCard style="padding-bottom: 0">
      <StudyTeam :members="members"/>
    </StudyInfoCard>
    <StudyInfoCard :noPadding="true">
      <StudyProcess/>
    </StudyInfoCard>
    <!--    <StudyInfoCard :invert="true" :title="this.msgd('caseStudies.links')" style="padding-top: 0; padding-bottom: 0">-->
    <!--      <StudyLink icon="github" link="https://github.com/harrypunia/Mage-Royale"/>-->
    <!--    </StudyInfoCard>-->
    <StudyInfoCard>
      <hr>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" title="Other Projects">
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
          position: "Project Manager & Front-End",
          role: "I did front-end for the game & am managing the team"
        }, {
          name: "Lauren Black",
          img: "laurenBlack.jpg",
          position: "Lead Designer",
          role: "I designed the graphics and conceptualized the game",
          visit: "http://www.laurenblackdesign.com"
        }, {
          name: "Omar Elbanby",
          img: "omarElbanby.jpg",
          position: "Back-End",
          role: "I did websockets and database for the game",
          visit: "https://www.linkedin.com/in/elbanby/"
        }, {
          name: "Marko Prodanovic",
          img: "markoProd.jpg",
          position: "Sound Designer",
          role: "I designed the sound for the game",
          visit: "https://www.linkedin.com/in/marko-prodanovic-70533a193/"
        }, {
          name: "Huang Fei",
          img: "huangFei.jpg",
          position: "Concept Artist",
          role: "I did concept art of the game",
          visit: "https://www.linkedin.com/in/fei-huang-39691a152/"
        }, {
          name: "Alex Atiti",
          img: "alexAtiti.jpg",
          position: "UI Designer",
          role: "I did the UI related graphics for the game",
          visit: "https://www.alexatiti.com/"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>