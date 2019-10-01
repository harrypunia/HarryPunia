<template>
  <div>
    <div class="study-more">
      <CaseStudyItem class="study-more-items" v-if="num-1 > 0" :num="num-1"/>
      <CaseStudyItem class="study-more-items" v-else-if="num+2 < this.$totalStudies" :num="num+2"/>
      <CaseStudyItem class="study-more-items" v-if="num+1 <= this.$totalStudies" :num="num+1"/>
    </div>
    <FooterButtons/>
    <SocialLinks />
  </div>
</template>

<script>
  import FooterButtons from "../../components/FooterButtons";
  import CaseStudyItem from "../../pages/home/caseStudies/caseItem/CaseItem";
  import SocialLinks from "../../components/SocialLinks";

  export default {
    name: "caseStudies.team",
    props: ['num'],
    components: {CaseStudyItem, FooterButtons, SocialLinks}
  }
</script>

<style scoped lang="scss">
  .study-more {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 40px;
  }
</style>