<template>
  <div class="study-body">
    <StudyInfoCard>
      <Link href="http://ixd0089.firebird.sheridanc.on.ca/vui/" class="study-button-try">
        <Button dir="horizontal" text="Explore" img="arrow-right"/>
      </Link>
      <StudyAbout num="6"/>
    </StudyInfoCard>
    <StudyInfoCard>
      <StudyProblem num="6"/>
    </StudyInfoCard>
    <StudyInfoCard :title="this.msgd('caseStudies.process')">
      <StudyProcess/>
    </StudyInfoCard>
    <StudyInfoCard>
      <hr>
    </StudyInfoCard>
    <StudyInfoCard :invert="true" :title="'Other Projects'">
      <StudyMore :num="6"/>
    </StudyInfoCard>
  </div>
</template>

<script>
  import Button from "../../../../components/button/Button";
  import StudyMore from "../../../../components/study/StudyMore";
  import StudyInfoCard from "../../../../components/study/StudyInfoCard";
  import StudyProblem from "../../../../components/study/StudyProblem";
  import StudyProcess from "./process/StudyProcess";
  import StudyAbout from "../../../../components/study/StudyAbout";
  import Link from "../../../../components/Link";

  export default {
    name: "caseStudies.6",
    components: {Link, Button, StudyInfoCard, StudyProcess, StudyAbout, StudyMore, StudyProblem},
  }
</script>

<style lang="scss" scoped>@import "../../../../resources/scss/pages/studies/studyBody";</style>