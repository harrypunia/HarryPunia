<template>
  <Parallaxy
      class="parallax"
      :speed-factor="speed || 0.1"
      breakpoint="(min-width: 600px)"
      :style="{width: size.w + 'px', height: size.h + 'px', minHeight: 0}"
  >
    <img :src="src" :alt="alt">
  </Parallaxy>
</template>

<script>
  import Parallaxy from "vue-parallaxy"

  export default {
    name: "Parallax",
    components: { Parallaxy },
    props: [ 'src', 'alt', 'speed', 'size' ]
  }
</script>