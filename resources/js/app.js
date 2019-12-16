import Vue from 'vue';
import { populateAmenitiesAndPrices} from "./helpers";
import "core-js/es/object/assign"
let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
import ImageCarousel from "./components/ImageCarousel";
import ModalWindow from "./components/ModalWindow";
import HeaderImage from "./components/HeaderImage";

let app = new Vue({
  el: '#app',
  data: Object.assign(model,{
    headerImageStyle: {
        'background-image': `url(${model.images[0]})`
    },
    contracted: true,
    modalOpen: false
  }),
  components:{
      ImageCarousel,
      ModalWindow,
      HeaderImage
  },
  methods: {
      openModal() {
          this.$refs.imagemodal.modalOpen = true;
      }
  }
});
