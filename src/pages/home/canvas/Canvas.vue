<template>
  <div ref="canvas">
    <vue-p5 id="canvas" @setup="setup" @draw="draw"></vue-p5>
  </div>
</template>

<script>
  import VueP5 from "vue-p5"
  import S1 from "./sketches/sketch1";
  import variables from "../../../resources/scss/_variables.scss";

  export default {
    name: "Canvas",
    components: {"vue-p5": VueP5},
    props: ['theme'],
    watch: {
      theme(newValue) {
        this.colors.main = variables[newValue + "Main"];
        this.colors.secondary = variables[newValue + "Secondary"]
      }
    },
    data() {
      return {
        s: null,
        colors: {
          main: variables[this.theme + "Main"],
          secondary: variables[this.theme + "Secondary"]
        }
      }
    },
    methods: {
      setup(sketch) {
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        this.s = new S1(sketch);
        window.onresize = () => sketch.resizeCanvas(window.innerWidth, window.innerHeight);
      },
      draw(sk) {
        sk.background(sk.color(this.colors.main));
        this.s.draw(sk, this.colors);
      }
    }
  }
</script>

<style scoped>
  #canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -100
  }
</style>