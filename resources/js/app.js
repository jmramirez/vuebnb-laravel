import Vue from 'vue';
import "core-js/es/object/assign"
import ListingPage from "./components/ListingPage";

let app = new Vue({
  el: '#app',
  render: h =>h(ListingPage)
});
