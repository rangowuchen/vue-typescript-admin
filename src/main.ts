/*
 * @Author: wuchen
 * @Date: 2021-11-16 14:39:23
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-24 10:41:42
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from "vue";
import 'normalize.css'//可以定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一
import App from "./App.vue";
import store from "./store";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router'

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
