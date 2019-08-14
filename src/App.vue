<template>
  <div>
    <div class="_scroll"></div>
    <Loader @loaded="state = 'in'"/>
    <Header/>
    <transition name="view">
      <router-view
          :state="state"
          :theme="theme"
          @themeChanged="updateSketch($event)"
      />
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader";
  import Header from "./components/header/Header";
  import Footer from "./components/footer/Footer";
  import jump from "jump.js";

  export default {
    components: {Loader, Header, Footer},
    watch: {
      $route() {
        jump("._scroll");
      }
    },
    data() {
      return {
        theme: 'Red',
        state: 'out'
      }
    },
    methods: {
      updateSketch(newTheme) {
        this.theme = newTheme
      },
    }
  }
</script>

<style lang="scss">
  @import "resources/scss/index";

  .view-enter-active, .view-leave-active {
    transition: opacity .4s ease;
  }

  .view-enter-active {
    transition-delay: .4s;
  }

  .view-enter, .view-leave-to {
    opacity: 0;
  }

  .view-enter-to, .view-leave {
    opacity: 1;
  }

  ._scroll {
    @include posAbs(0, 1px, false, default);
  }
</style>