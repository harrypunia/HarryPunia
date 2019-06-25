<template>
  <div>
    <Canvas :theme="theme" />
  </div>
</template>

<script>
  import Canvas from "../home/canvas/Canvas"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: { Canvas }
  }
</script>