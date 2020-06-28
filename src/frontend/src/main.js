import Vue from 'vue';
import axios from 'axios';
import vuex from 'vuex';
import App from './App.vue';
import router from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(vuex);
new Vue({
  router,
  store,
  axios,
  vuex,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');