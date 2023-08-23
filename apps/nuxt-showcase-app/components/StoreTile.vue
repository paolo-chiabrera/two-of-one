<script setup lang="ts">
import {Element} from "~/types/RestaurantesResponse";

const props = defineProps({
  restaurant: Object
})

const restaurant = props.restaurant as Element

</script>

<template>
  <div class="store" data-test-id="store"
       :style="`background-image: url('https://res.cloudinary.com/glovoapp/q_30,f_auto,c_fill,dpr_1.0,h_156,w_351,b_transparent/${restaurant.singleData?.storeData?.store.imageId}')`">
    <div class="title" data-test-id="title">
      {{ restaurant.singleData.storeData.store.name }}
    </div>
    <div class="tags-row" data-test-id="tags-row">
      <div class="tag" v-for="filter in restaurant.singleData.storeData.filters">{{ filter.name }}</div>
    </div>
    <div class="bottom-row" data-test-id="bottom-row">
      <div class="row-item" data-test-id="rating">{{ restaurant.singleData.storeData.store.ratingInfo.cardLabel }}
        ({{ restaurant.singleData.storeData.store.ratingInfo.totalRatingLabel }})
      </div>
      <span data-lorem-ipsum v-show="false">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>