import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ElementUI);

import { firebaseConfig } from "./config/firebaseConfig";

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
