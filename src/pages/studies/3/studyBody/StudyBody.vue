<template>
  <div class="study-body">
    <StudyInfoCard>
      <Link href="https://www.youtube.com/watch?v=ArF3UT5Q6RI" class="study-button-try">
        <Button dir="horizontal" :text="msg('try')" img="arrow-right"/>
      </Link>
      <StudyAbout num="3"/>
    </StudyInfoCard>
    <StudyInfoCard>
      <StudyProblem num="3" :isGoal="true"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard>
      <hr>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="'Other Projects'">
      <StudyMore :num="3"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import StudyMore from "../../../../components/study/StudyMore";
  import Button from "../../../../components/button/Button";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyProblem from "../../../../components/study/StudyProblem";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";
  import Link from "../../../../components/Link";

  export default {
    name: "caseStudies.3",
    components: {Link, Button, StudyInfoCard, StudyProcess, StudyTeam, StudyAbout, StudyMore, StudyProblem},
    data() {
      return {
        members: [{
          name: "Harry Punia",
          img: "harryPunia.jpg",
          role: "I conceptualized and designed this product"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>