import Vue from "vue";
import Cookies from 'js-cookie'
import App from "./App.vue";
import router from "./router";
import store from "./store";

// element-ui
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

// css reset
import "normalize.css";
// global css
import "@/styles/index.scss";
// global font
import "@/assets/plateform-font/iconfont.css";
// global css  element变量
import '@/styles/element-variables.scss'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
