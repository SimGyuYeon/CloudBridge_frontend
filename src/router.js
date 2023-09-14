import Vue from "vue";
import Router from "vue-router";
import MainPage from "./components/MainPage.vue";
import LoginPage from "./components/LoginPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/main",
      name: "MainPage",
      component: MainPage,
    },
  ],
});
