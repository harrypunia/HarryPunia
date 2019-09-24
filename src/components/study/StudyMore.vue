<template>
  <div>
    <div class="study-more">
      <CaseStudyItem class="study-more-items" v-if="num-1 > 0" :num="num-1"/>
      <CaseStudyItem class="study-more-items" v-else-if="num+2 < this.$totalStudies" :num="num+2"/>
      <CaseStudyItem class="study-more-items" v-if="num+1 <= this.$totalStudies" :num="num+1"/>
    </div>
    <div class="study-return">
      <SocialLinks/>
      <Grid justify="center" align="center">
        <router-link to="/" style="margin: 0">
          <Button class="study-return-buttons" :invert="true" text="Home" img="home" dir="vertical"/>
        </router-link>
        <ContactMe class="study-return-buttons"/>
      </Grid>
    </div>
  </div>
</template>

<script>
  import Button from "../button/Button";
  import Grid from "../../components/Grid";
  import SocialLinks from "../SocialLinks";
  import ContactMe from "../../components/ContactMe";
  import CaseStudyItem from "../../pages/home/caseStudies/caseItem/CaseItem";

  export default {
    name: "caseStudies.team",
    props: ['num'],
    components: {CaseStudyItem, Button, SocialLinks, ContactMe, Grid}
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

  .study-return {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;

    &-buttons {
      margin: 0 10px;
    }
  }
</style>