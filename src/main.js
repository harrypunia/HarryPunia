//Template
import Vue from 'vue';
import VueParallaxJs from 'vue-parallax-js';
//Dependencies
import VueRouter from 'vue-router';
import App from './App.vue';
//Assets
import {i18n} from "./resources/locale/vue-i81n";
import mixin from "./mixins/mixins";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueParallaxJs);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.mixin(mixin);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');