import Vue from 'vue';
import PrivacyPolicy from './components/subpages/PrivacyPolicy.vue';
import HelloWorld from './components/HelloWorld.vue';
import Game from './components/Game.vue';
import VueRouter from 'vue-router';

import './global.scss';
import './reset.scss';

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.use(VueRouter);

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
