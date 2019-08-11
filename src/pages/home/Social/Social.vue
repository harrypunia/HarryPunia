<template>
  <div class="social">
    <Title>{{this.msg("title")}}</Title>
    <BorderTitle>{{this.msg("instagram")}}</BorderTitle>
    <div class="social-instagram">
      <div class="social-instagram-item" :key="post" v-for="post in instaPosts">
        <InstagramPost :href="post" width="300px"/>
      </div>
    </div>
    <BorderTitle>{{this.msg("github")}}</BorderTitle>
    <div class="social-github">
      <GithubCalendar/>
    </div>
  </div>
</template>

<script>
  import InstagramPost from "../../../components/InstagramPost";
  import Title from "../../../components/Title"
  import BorderTitle from "../../../components/BorderTitle";
  import GithubCalendar from "../../../components/GithubCalendar";

  export default {
    name: "social",
    components: {Title, BorderTitle, InstagramPost, GithubCalendar},
    data() {
      return {
        instaPosts: ["ByMK0YQB0pO", "BvkPJMGAglQ", "Bs7MxqjAidL", "BrOmoRBA2tK", "BeLrfxaHlGx", "BeGuuZGgicO"]
      }
    }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/social/social";</style>