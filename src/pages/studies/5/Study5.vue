<template>
  <StudyContainer style="padding-top: 120px">
    <h1 bold center>Honorable Mentions</h1>
    <PhotoMontage id="Honorable Mentions" :images="images"/>
    <FooterButtons/>
  </StudyContainer>
</template>

<script>
  import FooterButtons from "../../../components/FooterButtons";
  import PhotoMontage from "../../../components/PhotoMontage";
  import StudyContainer from "../../../components/study/StudyContainer";

  export default {
    name: "caseStudies.5",
    props: ['theme', 'state'],
    components: {PhotoMontage, StudyContainer, FooterButtons},
    data() {
      return {
        images: [
          {src: require("../../../resources/img/caseStudies/5/process/1.jpg")},
          {src: require("../../../resources/img/caseStudies/5/process/2.jpg")},
          {src: require("../../../resources/img/caseStudies/5/process/3.jpg")},
          {src: require("../../../resources/img/caseStudies/5/process/4.jpg")},
          {src: require("../../../resources/img/caseStudies/5/process/5.jpg")},
          {src: require("../../../resources/img/caseStudies/5/process/6.jpg")},
          {
            src: require("../../../resources/img/caseStudies/5/process/7.jpg"),
            orientation: "landscape"
          },
          {
            src: require("../../../resources/img/caseStudies/5/process/8.jpg"),
            orientation: "landscape"
          },
          {src: require("../../../resources/img/caseStudies/5/process/9.jpg")}
        ]
      }
    }
  }
</script>