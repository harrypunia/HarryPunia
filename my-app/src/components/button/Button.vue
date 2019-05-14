<template>
  <button :class="dir">
    <p medium class="button__title">{{text}}</p>
    <div class="button__img">
      <i :class="'fas fa-' + img"></i>
    </div>
  </button>
</template>

<script>

  export default {
    name: 'Button',
    props: ['dir', 'text', 'img', 'action']
  }

</script>

<style lang="scss">@import "../../resources/scss/button";</style>