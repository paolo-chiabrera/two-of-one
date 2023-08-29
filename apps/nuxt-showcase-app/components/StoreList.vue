<template>
  <h2>Stores list {{ queryParams }}</h2>
  <AppFilters/>
  <section class="stores" id="stores-list">
    <store-tile v-for="restaurant in restaurantsList" :restaurant="restaurant"/>
  </section>

</template>
<script setup lang="ts">
import AppFilters from "~/components/AppFilters.vue";
import StoreTile from "~/components/StoreTile.vue";
import {RestaurantesReponse} from "~/types/RestaurantesResponse";

const props = defineProps({q: String})
const queryParams = props.q


const {data, pending, error, refresh} = await useAsyncData(
    'restaurants' + queryParams,
    () => Promise.all(
        [
          $fetch('https://comida.sillyapps.io/restaurants.json' + queryParams),
          $fetch('https://comida.sillyapps.io/countries.json' + queryParams),
          $fetch('https://comida.sillyapps.io/cities.json' + queryParams),
        ]
    ).then(responses => responses[0].elements.filter(
        element => {
          if (element.type !== 'SINGLE') return false;
          if (element.singleData?.type !== 'STORE') return false;
          if (!element.singleData?.storeData) return false;
          return true
        }
    ))
)

const restaurantsList = ((unref(data)) as RestaurantesReponse)


</script>