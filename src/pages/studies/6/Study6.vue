<template>
  <StudyContainer style="padding-top: 120px">
    <StudyIntro
        :state="state"
        type="video"
        :title="msg('title')"
        src="6/display.mp4"
    />
    <StudyBody/>
  </StudyContainer>
</template>

<script>
  import StudyContainer from "../../../components/study/StudyContainer";
  import StudyIntro from "../../../components/study/StudyIntro";
  import StudyBody from "./studyBody/StudyBody";

  export default {
    name: "caseStudies.6",
    props: ['theme', 'state'],
    components: {StudyContainer, StudyIntro, StudyBody},
    data() {
      return {}
    }
  }
</script>