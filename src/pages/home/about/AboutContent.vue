<template>
  <div class="aboutContent">
    <div class="aboutContent-component aboutContent-component-personal">
      <h4>Personal</h4>
      <div class="aboutContent-personal aboutContent-items">
        <List class="aboutContent-list-items"
              v-for="personal in $t('about.personal')"
              :key="personal.title"
              :title="personal.title"
              :desc="personal.desc"
        />
      </div>
    </div>
    <div class="aboutContent-component aboutContent-component-looking-for">
      <h4>Looking For</h4>
      <div class="aboutContent-looking-for aboutContent-items">
        <List class="aboutContent-list-items"
              v-for="looking in $t('about.looking')"
              :key="looking.title"
              :title="looking.title"
              :desc="looking.desc"
        />
      </div>
    </div>
    <div class="aboutContent-component aboutContent-component-extra">
      <h4>Extra</h4>
      <div class="aboutContent-extra aboutContent-items">
        <p style="max-width: none;">{{ $t('about.extra') }}</p>
      </div>
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