import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ApiService from "./services/api_service";

//Components
import SideMenu from "./components/SideMenu.vue";
import Loading from "./components/Loader.vue";

// API Service
ApiService.init();

Vue.component("SideMenu", SideMenu);
Vue.component("Loading", Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
