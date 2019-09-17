<template>
  <div class="github-calendar" :style="customCSS"></div>
</template>

<script>
  import GithubCalendar from "github-calendar"

  export default {
    name: "github.calendar",
    props: ["customCSS"],
    mounted() {
      new GithubCalendar(".github-calendar", "harrypunia", {
        summary_text: "@harrypunia",
        responsive: true
      });
    }
  }
</script>

<style scoped lang="scss">
  @import "~github-calendar/dist/github-calendar-responsive.css";
  @import "../resources/scss/mixins";

  .github-calendar-customContainer {
    max-width: 1000px;
    width: auto;
    min-width: 0;
    border: 1px solid;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    color: black !important;
  }
</style>