import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { AlertPlugin } from "bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueSwal from "vue-swal";
import store from "./store";

axios.defaults.baseURL =
  process.env.baseURL || "https://proconverter.herokuapp.com/api";

let token = localStorage.getItem("jwt");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(AlertPlugin);
Vue.use(VueSwal);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
