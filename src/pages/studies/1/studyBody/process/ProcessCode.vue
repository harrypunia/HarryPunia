<template>
  <div class="study-process-code">
    <StudyCardSection :title="msg('explanation.title')" :desc="msg('explanation.desc')">
      <p>{{msg("explanation.info")}}</p>
      <StudyCardSection :title="'Code Practices'">
        <div class="study-process-code-grid">
          <div class="study-process-code-items">
            <h4>{{msg("practices.1")}}</h4>
            <CodeBlock type="brackets" src="1/code-modular.png"/>
          </div>
          <div class="study-process-code-items">
            <h4>{{msg("practices.2")}}</h4>
            <CodeBlock type="brackets" src="1/code-assets.png"/>
          </div>
        </div>
      </StudyCardSection>
    </StudyCardSection>
    <StudyCardSection :title="msg('management.title')" :desc="msg('management.desc')">
      <ol>
        <li><strong>1. Sketch: </strong>{{ msg("management.1") }}</li>
        <li><strong>2. Game: </strong>{{ msg("management.2") }}</li>
        <li><strong>3. Player: </strong>{{ msg("management.3") }}</li>
        <li>
          <strong>4. Floor: </strong>{{ msg("management.4.0") }}
          <ul>
            <li><strong>a. Active Bar: </strong>{{ msg("management.4.1") }}</li>
            <li><strong>b. Neighbouring Bars: </strong>{{ msg("management.4.2") }}
            </li>
          </ul>
        </li>
        <li>
          <strong>5. Obstacles: </strong>{{ msg("management.5.0") }}
          <ul>
            <li><strong>a. Spikes: </strong>{{ msg("management.5.1") }}</li>
            <li><strong>b. Doors: </strong>{{ msg("management.5.2") }}</li>
          </ul>
        </li>
      </ol>
    </StudyCardSection>
  </div>
</template>

<script>
  import CodeBlock from "../../../../../components/CodeBlock";
  import StudyCardSection from "../../../../../components/study/StudyCardSection";

  export default {
    name: "caseStudies.1.process.code",
    components: {CodeBlock, StudyCardSection},
  }
</script>

<style lang="scss" scoped>@import "../../../../../resources/scss/pages/studies/1/processCode";</style>