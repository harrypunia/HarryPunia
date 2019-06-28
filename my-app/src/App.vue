<template>
  <div>
    <Loader @loaded="state = 'in'" :toggle="switchRouter" />
    <Header/>
    <router-view
        :state="state"
        :theme="theme"
        @themeChanged="updateSketch($event)"
    />
  </div>
</template>

<script>
  import Loader from "./components/loader/Loader"
  import Header from "./components/header/Header"

  export default {
    name: 'app',
    components: { Loader, Header },
    watch:{
      $route (){
        this.state = 'out';
        this.switchRouter = true;
        setTimeout(() => this.state ='in', 400);
        setTimeout(() => this.switchRouter = false, 1000);
      }
    },
    data() {
      return {
        theme: 'Red',
        state: 'out',
        switchRouter: false
      }
    },
    methods: {
      updateSketch(newTheme) {this.theme = newTheme},
    }
  }
</script>

<style lang="scss">
  @import "resources/scss/index";
</style>