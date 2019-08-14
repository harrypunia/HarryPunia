<template>
  <div class="study-process-code">
    <StudyCardSection :title="msg('explanation.title')" :desc="msg('explanation.desc')">
      <p invert>{{msg("explanation.info")}}</p>
      <StudyCardSection :title="'Code Practices'">
        <div class="study-process-code-grid">
          <div class="study-process-code-items">
            <h4 invert>{{msg("practices.1")}}</h4>
            <CodeBlock src="2/code-super.png"/>
          </div>
          <div class="study-process-code-items">
            <h4 invert>{{msg("practices.2")}}</h4>
            <CodeBlock src="2/code-poly.png"/>
          </div>
          <div class="study-process-code-items">
            <h4 invert>{{msg("practices.3")}}</h4>
            <CodeBlock src="2/code-singleton.png"/>
          </div>
        </div>
      </StudyCardSection>
    </StudyCardSection>
    <StudyCardSection :title="msg('management.title')" :desc="msg('management.desc')">
      <ol invert>
        <li invert><strong>1. Main: </strong>{{ msg("management.1") }}</li>
        <li invert><strong>2. Game: </strong>{{ msg("management.2") }}</li>
        <li invert><strong>3. Env: </strong>{{ msg("management.3") }}</li>
        <li invert><strong>4. Player: </strong>{{ msg("management.4") }}</li>
        <li invert><strong>5. Client: </strong>{{ msg("management.5") }}</li>
        <li invert><strong>6. Character: </strong>{{ msg("management.6") }}</li>
        <li invert><strong>7. Skill: </strong>{{ msg("management.7") }}</li>
        <li invert><strong>8. Shop: </strong>{{ msg("management.8") }}</li>
      </ol>
    </StudyCardSection>
  </div>
</template>

<script>
  import CodeBlock from "../../../../../components/CodeBlock";
  import StudyCardSection from "../../../../../components/study/StudyCardSection";

  export default {
    name: "caseStudies.2.process.code",
    components: {CodeBlock, StudyCardSection},
  }
</script>

<style lang="scss" scoped>@import "../../../../../resources/scss/pages/studies/2/processCode";</style>