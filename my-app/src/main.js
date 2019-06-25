//Template
import Vue from 'vue'
import App from './App.vue'
//Dependencies
import VueRouter from 'vue-router'
//Assets
import {i18n} from "./resources/locale/vue-i81n"
import Home from "./pages/home/Home"
import Study1 from "./pages/studies/Study1"
import VueParallaxJs from 'vue-parallax-js'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueParallaxJs);

const routes = [
  { path: '/', component: Home },
  { path: "/study/1", component: Study1}
];

const router = new VueRouter({routes});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');