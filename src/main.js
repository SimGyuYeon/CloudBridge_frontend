import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://10.10.2.37:8000", // API의 기본 URL 설정
  timeout: 3000, // 요청 타임아웃 설정 (10초)
  headers: {
    "Content-Type": "application/json", // 요청 헤더 설정
    // 다른 원하는 헤더 설정 가능
  },
});

// Vue 프로토타입에 Axios 인스턴스 추가 (글로벌 설정)
Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
