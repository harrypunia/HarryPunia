<template>
  <div>
    <Nav :state="state" :theme="theme" :buttons="buttons" @themeChanged="updateApp($event)" />
    <StudyIntro :state="state" :title="$t('caseStudies.1.title')" src="1/display.mp4" type="video"/>
    <StudyBody />
    <StudyFooter />
  </div>
</template>

<script>
  import Nav from "../../../components/nav/Nav"
  import StudyIntro from "../../../components/study/StudyIntro"
  import StudyBody from "./StudyBody";
  import StudyFooter from "./StudyFooter";

  export default {
    name: "Study1",
    props: [ 'theme', 'state' ],
    components: { Nav, StudyIntro, StudyBody, StudyFooter },
    data() {
      return {
        buttons: [{
          value: 'home',
          ref: '',
          href: '/'
        }, {
          value: 'study',
          ref: 'study'
        },{
          value: 'gallery',
          ref: 'gallery'
        },{
          value: 'more',
          ref: 'more'
        }]
      }
    },
    methods: {
      updateApp(newTheme) {this.$emit('themeChanged', newTheme)}
    }
  }
</script>