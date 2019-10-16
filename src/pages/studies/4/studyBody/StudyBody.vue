<template>
  <div class="study-body">
    <StudyInfoCard>
      <Link href="https://www.youtube.com/watch?v=x9BAJbtY3Yk&feature=youtu.be" class="study-button-try">
        <Button dir="horizontal" :text="msg('try')" img="arrow-right"/>
      </Link>
      <StudyAbout num="4"/>
    </StudyInfoCard>
    <StudyInfoCard :pressed="true">
      <StudyProblem num="4" :isGoal="true"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.members')">
      <StudyTeam :members="members"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard>
      <hr>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="'Other Projects'">
      <StudyMore :num="4"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../../components/button/Button";
  import StudyMore from "../../../../components/study/StudyMore";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyProblem from "../../../../components/study/StudyProblem";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";
  import Link from "../../../../components/Link";

  export default {
    name: "caseStudies.4",
    components: {Link, Button, StudyInfoCard, StudyProcess, StudyTeam, StudyAbout, StudyMore, StudyProblem},
    data() {
      return {
        members: [{
          name: "Harry Punia",
          img: "harryPunia.jpg",
          position: "Designer, Developer",
          role: "I conceptualized, designed the patterns and did the circuits/coding"
        },
          {
            name: "Marko Prodanovic",
            img: "markoProd.jpg",
            position: "Product Building, Designer",
            role: "I conceptualized and constructed the physical product"
          }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>