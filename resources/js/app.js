import Vue from 'vue';
import "core-js/es/object/assign"
import App from './components/App.vue'

import ListingPage from "./components/ListingPage";
import router from "./router";

let app = new Vue({
  el: '#app',
  render: h =>h(App),
  router
});
