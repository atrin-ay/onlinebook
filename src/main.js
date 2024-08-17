import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';
import inf from './components/inf.vue'; 
import librali from './components/librali.vue'; 
import login from './components/login.vue';
import read from './components/read.vue';
import sain from './components/sain.vue';
import fan from './components/fan.vue';
import './assets/tailwind.css'; 

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: fan , props: true},
  { name: 'inf', path: '/inf/:idm', component: inf, props: true },
  { path: '/librali', component: librali },
  { path: '/login', component: login },
  { name:'read' , path: '/read', component: read , props: true},
  { path: '/sain', component: sain },
];

const router = new VueRouter({
  routes 
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
