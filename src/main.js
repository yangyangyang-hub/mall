import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
import { NavBar } from 'vant';




import { Swipe, SwipeItem, Lazyload, Tab, Tabs, List, PullRefresh, } from 'vant';

Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
