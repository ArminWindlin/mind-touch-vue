import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import PrivacyPolicy from './components/subpages/PrivacyPolicy.vue';
import HelloWorld from './components/HelloWorld.vue';
import Game from './components/Game.vue';

import './global.scss';
import './reset.scss';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

// VueX
const store = new Vuex.Store({
  state: {
    unitSize: 40,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Game},
    {path: '/privacy', component: PrivacyPolicy},
    {path: '/hello', component: HelloWorld},
  ],
});

new Vue({
  router,
  components: {},
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `,
}).$mount('#app');
