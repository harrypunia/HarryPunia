<template>
  <StudyContainer>
    <StudyIntro
        :state="state"
        :title="msg('title')"
        type="video"
        src="4/display.mp4"
    />
    <StudyBody/>
  </StudyContainer>
</template>

<script>
  import StudyContainer from "../../../components/study/StudyContainer";
  import StudyIntro from "../../../components/study/StudyIntro"
  import StudyBody from "./studyBody/StudyBody";

  export default {
    name: "caseStudies.4",
    props: ['theme', 'state'],
    components: {StudyContainer, StudyIntro, StudyBody},
    data() {
      return {
        buttons: [{
          value: 'home',
          ref: '',
          href: '/'
        }, {
          value: 'about',
          ref: 'study-about',
          href: ""
        }, {
          value: 'process',
          ref: 'study-process',
          href: ""
        }, {
          value: 'members',
          ref: 'study-team',
          href: ""
        }]
      }
    }
  }
</script>