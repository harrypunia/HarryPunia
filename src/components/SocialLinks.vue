<template>
  <div class="social-links">
    <Link class="social-links-items" href="https://www.instagram.com/puniaharsimran/">
      <i class="fab fa-instagram"></i>
    </Link>
    <Link class="social-links-items" href="https://www.github.com/harrypunia/">
      <i class="fab fa-github"></i>
    </Link>
    <Link class="social-links-items" href="https://www.linkedin.com/in/harry-punia-904590130/">
      <i class="fab fa-linkedin-in"></i>
    </Link>
  </div>
</template>

<script>
  import Link from "./Link";

  export default {
    name: "caseStudies.team",
    components: {Link}
  }
</script>

<style scoped lang="scss">
  @import "../resources/scss/mixins";

  .social-links {
    @include flexGrid(center, center, nowrap);
    width: 100%;

    &-items {
      padding: 10px 20px;
      margin: 10px 5px;
      font-size: 24px;
      @include smooth(background-color, .2s);

      &:hover {
        @include setTheme("background-color", xxHigh);
        @include setTheme("color", main);
      }
    }
  }
</style>