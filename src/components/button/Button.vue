<template>
  <button class="button" :class="[dir, {'invert' : invert}]">
    <p medium class="button-title">{{text}}</p>
    <div class="button-img-container">
      <i class="button-img" :class="'fas fa-' + img"></i>
    </div>
  </button>
</template>

<script>

  export default {
    name: 'Button',
    props: ['dir', 'text', 'img', 'invert', 'action']
  }

</script>

<style lang="scss">@import "../../resources/scss/components/button/button";</style>