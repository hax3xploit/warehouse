import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import 'bootstrap';
import './assets/app.scss'
import './plugins/bootstrap-vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueRouter from 'vue-router'
import Home from './components/Home'
import Play from './components/Play'
import Learn from './components/Learn'
import Help from './components/Help'
import L_linearSearch from './components/L_linearSearch'
import P_linearSearch from './components/P_linearSearch'
import mission1 from './components/mission1'
import FoodItems from './components/FoodItems'

import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.use(BootstrapVueIcons)

Vue.component('Navbar', require ('./components/Navbar.vue').default);


Vue.use(BootstrapVue);
Vue.use(vueRouter);
const routes=[
  {path:'/', component:Home},
  {path:'/Play', component:Play},
  {path:'/Learn',component:Learn},
  {path:'/Help', component:Help},
  {path:'/linear',component:L_linearSearch},
  {path:'/playLS',component:P_linearSearch},
  {path:'/mission1',component:mission1},
  {path:'/FoodItems',component:FoodItems}

]
const router= new vueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  router: router,

  render: h => h(App),
}).$mount('#app')

