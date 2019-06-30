<template>
  <button :class="[dir, {'invert' : invert}]">
    <p medium class="button__title">{{text}}</p>
    <div class="button__img">
      <i :class="'fas fa-' + img"></i>
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