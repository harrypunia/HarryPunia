<template>
  <div class="study-footer">
    <StudyInfoCard :invert="true" title="Explore more" style="height: 500px"></StudyInfoCard>
  </div>
</template>

<script>
  import StudyInfoCard from "../../../components/study/StudyInfoCard";

  export default {
    name: "StudyFooter",
    components: {StudyInfoCard}
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/studies/1/studyFooter";</style>