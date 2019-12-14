<template>
  <div>
    <h1 center bold>Code Process</h1>
    <Grid justify="space-between" class="study-process-code">
      <StudyCardSection :title="msg('explanation.title')" :desc="msg('explanation.desc')">
        <p>{{msg("explanation.info")}}</p>
      </StudyCardSection>
      <StudyCardSection :title="msg('management.title')" :desc="msg('management.desc')">
        <ol>
          <li><strong>1. Main: </strong>{{ msg("management.1") }}</li>
          <li><strong>2. Game: </strong>{{ msg("management.2") }}</li>
          <li><strong>3. Env: </strong>{{ msg("management.3") }}</li>
          <li><strong>4. Player: </strong>{{ msg("management.4") }}</li>
          <li><strong>5. Client: </strong>{{ msg("management.5") }}</li>
          <li><strong>6. Character: </strong>{{ msg("management.6") }}</li>
          <li><strong>7. Skill: </strong>{{ msg("management.7") }}</li>
          <li><strong>8. Shop: </strong>{{ msg("management.8") }}</li>
        </ol>
      </StudyCardSection>
    </Grid>
    <Grid wrap>
      <CodeDescription src="2/code-super.png" :title="msg('practices.1.title')" :desc="msg('practices.1.desc')"/>
      <CodeDescription right src="2/code-poly.png" :title="msg('practices.2.title')" :desc="msg('practices.2.desc')"/>
      <CodeDescription src="2/code-singleton.png" :title="msg('practices.3.title')" :desc="msg('practices.3.desc')"/>
    </Grid>
  </div>
</template>

<script>
  import Grid from "../../../../../components/Grid";
  import CodeBlock from "../../../../../components/CodeBlock";
  import CodeDescription from "../../../../../components/study/CodeDescription";
  import StudyCardSection from "../../../../../components/study/StudyCardSection";

  export default {
    name: "caseStudies.2.process.code",
    components: {CodeBlock, StudyCardSection, CodeDescription, Grid},
  }
</script>

<style lang="scss" scoped>@import "../../../../../resources/scss/pages/studies/2/processCode";</style>