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
        sketches: [S1],
        colors: {
          main: variables[this.theme + "Main"],
          secondary: variables[this.theme + "Secondary"]
        }
      }
    },
    methods: {
      setup(sketch) {
        const chosenS = this.sketches[Math.floor(Math.random() * this.sketches.length)];
        sketch.createCanvas(window.innerWidth, window.innerHeight);
        this.s = new chosenS(sketch);
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
    width: 100vw;
    height: 100vh;
    z-index: -100
  }
</style>