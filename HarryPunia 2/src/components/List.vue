<template>
  <div class="list">
    <p bold>{{title}}: <span>{{desc}}</span></p>
  </div>
</template>

<script>
  export default {
    name: "PersonalInfo",
    props: [ 'title', 'desc'],
  }
</script>

<style lang="scss" scoped>@import "../resources/scss/components/list";</style>