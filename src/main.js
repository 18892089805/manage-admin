import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';  
import 'element-ui/lib/theme-chalk/index.css';   //引入全部elementui 开发中可以按需引入
import '@/assets/scss/reset.scss';
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
