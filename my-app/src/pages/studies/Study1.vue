<template>
  <div>
    <Nav :state="state" :theme="theme" :buttons="buttons" @themeChanged="updateApp($event)" />
  </div>
</template>

<script>
  import Nav from "../../components/nav/Nav"

  export default {
    name: "Home",
    props: ['theme', 'state'],
    components: { Nav },
    data() {
      return {
        buttons: [{
          value: 'home',
          ref: '#',
          href: '#/'
        }, {
          value: 'study',
          ref: 'study',
          href: '#'
        },{
          value: 'gallery',
          ref: 'gallery',
          href: '#'
        },{
          value: 'more',
          ref: 'more',
          href: '#'
        }]
      }
    },
    methods: {
      updateApp(newTheme) {this.$emit('themeChanged', newTheme)}
    }
  }
</script>