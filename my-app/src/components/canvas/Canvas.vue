<template>
  <div>
    <vue-p5 id="canvas" v-on="{setup, draw}"></vue-p5>
  </div>
</template>

<script>
  import VueP5 from "vue-p5"
  import S from "./sketches/sketch1";
  import variables from "../../resources/scss/_variables.scss";

  export default {
    name: "Canvas",
    components: { "vue-p5": VueP5 },
    props: ['theme'],
    watch: {
      theme(newValue, oldValue) {
        this.colors.main= variables[newValue + "Main"];
        this.colors.secondary= variables[newValue + "Secondary"]
      }
    },
    data () {
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
        this.s = new S(sketch);
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