<template>
  <div>
    <h1 center bold>Code Process</h1>
    <Grid wrap>
      <StudyCardSection :title="msg('explanation.title')" :desc="msg('explanation.desc')">
        <p>{{msg("explanation.info")}}</p>
      </StudyCardSection>
      <StudyCardSection :title="msg('management.title')" :desc="msg('management.desc')">
        <ol>
          <li><strong>1. Sketch: </strong>{{ msg("management.1") }}</li>
          <li><strong>2. Game: </strong>{{ msg("management.2") }}</li>
          <li><strong>3. Player: </strong>{{ msg("management.3") }}</li>
          <li><strong>4. Floor: </strong>{{ msg("management.4.0") }}</li>
          <li><strong>5. Active Bar: </strong>{{ msg("management.4.1") }}</li>
          <li><strong>6. Neighbouring Bars: </strong>{{ msg("management.4.2") }}</li>
          <li><strong>7. Obstacles: </strong>{{ msg("management.5.0") }}</li>
          <li><strong>8. Spikes: </strong>{{ msg("management.5.1") }}</li>
          <li><strong>9. Doors: </strong>{{ msg("management.5.2") }}</li>
        </ol>
      </StudyCardSection>
    </Grid>
    <Grid wrap>
      <div class="study-process-code-items">
        <h4>{{msg("practices.1")}}</h4>
        <CodeBlock type="brackets" src="1/code-modular.png"/>
      </div>
      <div class="study-process-code-items">
        <h4>{{msg("practices.2")}}</h4>
        <CodeBlock type="brackets" src="1/code-assets.png"/>
      </div>
    </Grid>
  </div>
</template>

<script>
  import Grid from "../../../../../components/Grid";
  import CodeBlock from "../../../../../components/CodeBlock";
  import StudyCardSection from "../../../../../components/study/StudyCardSection";

  export default {
    name: "caseStudies.1.process.code",
    components: {CodeBlock, StudyCardSection, Grid},
  }
</script>

<style lang="scss" scoped>@import "../../../../../resources/scss/pages/studies/1/processCode";</style>