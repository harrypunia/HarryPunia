<template>
  <div class="study-team">
    <div class="study-team-member" :key="member.key" v-for="member in members">
      <img class="member-image" :src="require(`../../resources/img/caseStudies/members/${member.img}`)"
           alt="Project Member">
      <h4 center class="member-name">{{member.name}}</h4>
      <p small center class="member-desc">{{member.position}}</p>
      <Link hover class="member-visit" v-if="member.visit" :href="member.visit">
        {{$t("visit")}}
      </Link>
      <p small v-if="member.visit"><i class="fas fa-external-link-alt"></i></p>
      <p class="member-role">{{member.role}}</p>
    </div>
  </div>
</template>

<script>
  import Link from "../Link";

  export default {
    name: "caseStudies.team",
    components: {Link},
    props: ['members']
  }
</script>

<style lang="scss" scoped>@import "../../resources/scss/components/study/studyTeam";</style>