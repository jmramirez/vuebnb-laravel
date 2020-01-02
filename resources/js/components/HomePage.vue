<template>
    <div class="home-container">
        <listing-summary-group v-for="(group, country) in listing_groups" :key="country" :listings="group" :country="country" class="listing-summary-group"></listing-summary-group>

    </div>
</template>
<script>
    import { groupByCountry} from "../helpers";
    import ListingSummary from "./ListingSummary";
    import axios from 'axios'
    import routeMixin from '../route-mixin'
    import ListingSummaryGroup from "./ListingSummaryGroup";

    let serverData = JSON.parse(window.vuebnb_server_data);
    let listing_groups = groupByCountry(serverData.listings);

    export default {
        mixins: [routeMixin],
        components: {ListingSummaryGroup, ListingSummary},
        data() {
            return { listing_groups: []}
        },
        methods:{
          assignData({ listings }){
              this.listing_groups = groupByCountry(listings)
          },
        },
        beforeRouteEnter(to, from, next) {
            let serverData = JSON.parse(window.vuebnb_server_data);
            if(to.path === serverData.path) {
                let listing_groups = groupByCountry(serverData.listings);
                next (component => component.listing_groups = listing_groups);
            } else {
                axios.get(`/api/`).then(({ data })=>{
                  let listing_groups = groupByCountry(data.listings)
                  next(component => component.listing_groups = listing_groups)
                })
            }
        }
    }

</script>

