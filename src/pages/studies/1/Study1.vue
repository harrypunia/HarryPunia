<template>
  <StudyContainer>
    <Nav :state="state" :theme="theme" :buttons="buttons" @themeChanged="updateApp($event)"/>
    <StudyIntro
        :state="state"
        :title="this.msg('title')"
        type="video"
        src="1/display.mp4"
        fallbackImage="1/code-modular.png"
    />
    <StudyBody/>
    <StudyFooter/>
  </StudyContainer>
</template>

<script>
  import StudyContainer from "../../../components/study/StudyContainer";
  import Nav from "../../../components/nav/Nav"
  import StudyIntro from "../../../components/study/StudyIntro"
  import StudyBody from "./studyBody/StudyBody";
  import StudyFooter from "./StudyFooter";

  export default {
    name: "caseStudies.1",
    props: ['theme', 'state'],
    components: {Nav, StudyContainer, StudyIntro, StudyBody, StudyFooter},
    data() {
      return {
        buttons: [{
          value: 'home',
          ref: '',
          href: '/'
        }, {
          value: 'study',
          ref: 'study'
        }, {
          value: 'gallery',
          ref: 'gallery'
        }, {
          value: 'more',
          ref: 'more'
        }]
      }
    },
    methods: {
      updateApp(newTheme) {
        this.$emit('themeChanged', newTheme)
      }
    }
  }
</script>