<template>
  <div>
    <Nav :state="state" :theme="theme" :buttons="buttons" @themeChanged="updateApp($event)" />
    <StudyIntro :state="state" src="1/display.mp4" :title="$t('caseStudies.1.title')" />
  </div>
</template>

<script>
  import Nav from "../../components/nav/Nav"
  import StudyIntro from "../../components/study/StudyIntro"

  export default {
    name: "Home",
    props: [ 'theme', 'state' ],
    components: { Nav, StudyIntro },
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