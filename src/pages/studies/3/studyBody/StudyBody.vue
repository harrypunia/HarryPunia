<template>
  <div class="study-body">
    <StudyInfoCard>
      <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ArF3UT5Q6RI" class="study-button-try">
        <Button :invert="true" dir="horizontal" :text="msg('try')" img="arrow-right"/>
      </a>
      <StudyAbout num="3"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.members')">
      <StudyTeam :members="members"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../../components/button/Button";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyProcess from "./process/StudyProcess";
  import StudyTeam from "../../../../components/study/StudyTeam";
  import StudyAbout from "../../../../components/study/StudyAbout";

  export default {
    name: "caseStudies.3",
    components: {Button, StudyInfoCard, StudyProcess, StudyTeam, StudyAbout},
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