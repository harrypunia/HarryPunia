<template>
  <div class="aboutContent">
    <h4>Personal</h4>
    <div title="Personal" class="aboutContent-personal aboutContent-items">
      <List class="aboutContent-personal-items"
            v-for="personal in $t('about.personal')"
            :key="personal.title"
            :title="personal.title"
            :desc="personal.desc"
      />
    </div>
    <h4>Looking For</h4>
    <div title="Personal" class="aboutContent-personal aboutContent-items">
      <List class="aboutContent-personal-items"
            v-for="looking in $t('about.looking')"
            :key="looking.title"
            :title="looking.title"
            :desc="looking.desc"
      />
    </div>
    <h4>Extra</h4>
    <div title="Personal" class="aboutContent-personal aboutContent-items">
      <p style="max-width: none;">{{ $t('about.extra') }}</p>
    </div>
  </div>
</template>

<script>
  import List from "../../../components/List"

  export default {
    name: "AboutContent",
    components: { List }
  }
</script>

<style lang="scss" scoped>@import "../../../resources/scss/pages/home/about/aboutContent";</style>