<template>
  <h2>Stores list</h2>
  <AppFilters/>
  <section class="stores" id="stores-list">
    <store-tile v-for="restaurant in restaurantsList" :restaurant="restaurant"/>
  </section>

</template>
<script setup lang="ts">
import AppFilters from "~/components/AppFilters.vue";
import StoreTile from "~/components/StoreTile.vue";
import {RestaurantesReponse} from "~/types/RestaurantesResponse";

const {data, pending, error, refresh} = await useAsyncData(
    'restaurants',
    () => Promise.all(
        [
          $fetch('https://comida.sillyapps.io/restaurants.json'),
          $fetch('https://comida.sillyapps.io/countries.json'),
          $fetch('https://comida.sillyapps.io/cities.json'),
        ]
    ).then(responses => responses[0])
)

const restaurantsList = ((unref(data)) as RestaurantesReponse).elements.filter(
    element => {
      if (element.type !== 'SINGLE') return false;
      if (element.singleData?.type !== 'STORE') return false;
      if (!element.singleData?.storeData) return false;
      return true
    }
)


</script>