//Template
import Vue from 'vue'
import App from './App.vue'
//Dependencies
import VueRouter from 'vue-router'
import VueScrollTo from "vue-scrollto"
//Assets
import Home from "./pages/Home"

Vue.config.productionTip = false;
Vue.use(VueRouter, VueScrollTo);

const routes = [
  { path: '/', component: Home }
];

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');