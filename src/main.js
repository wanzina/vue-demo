import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false;

import './assets/css/base.css';
import './assets/css/style.css';
import 'animate.css'

/* import axios from "axios";
window.axios=axios */
import axios from './plugins/axios.js';//安装axios插件
Vue.use(axios);

import loading from './components/loading';
Vue.use(loading);

new Vue({
  data : {
    
      bloading:false,
    
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//import vm from './plugins/vue';