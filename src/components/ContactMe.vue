<template>
  <Link href="https://calendly.com/harry-77/introduction" class="contact-me">
    <Button action="#" dir="vertical" :text="msg('button')" img="grin-alt" />
  </Link>
</template>

<script>
  import Link from "./Link";
  import Button from "./button/Button";

  export default {
    name: "intro",
    props: ['invert'],
    components: {Link, Button}
  }
</script>

<style scoped>
  .contact-me {
    text-decoration: none;
  }
</style>