/*
 * @Author: wuchen
 * @Date: 2021-11-16 14:39:23
 * @LastEditors: wuchen
 * @LastEditTime: 2021-11-20 14:47:41
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import ElementUI from "element-ui";
import router from '@/router'

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
