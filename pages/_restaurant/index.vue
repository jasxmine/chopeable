<template>
  <div>
    <div class="container vh-100 mt-5 p-0">
      <img :src="restaurantData.featured_image" />
      <div class="d-flex justify-content-between">
        <h1>
          {{ restaurantData.name }}
        </h1>
        <div
          v-if="restaurantData.user_rating"
          class="d-flex align-content-center mt-5"
        >
          <div
            v-for="ratings in parseInt(
              restaurantData.user_rating.aggregate_rating
            )"
            :key="ratings"
          >
            <RatingComponent />
          </div>
          <h4 class="m-0 mt-1 ml-2">
            {{ restaurantData.user_rating.aggregate_rating }}
          </h4>
        </div>
      </div>
      <h4 class="text-muted">
        {{ `${restaurantData.establishment} - ${restaurantData.cuisines}` }}
      </h4>
      <h5>
        {{ restaurantData.location && restaurantData.location.locality }}
      </h5>
      <p>{{ restaurantData.timings }}</p>
      <div class="mt-4">
        <b-button variant="warning" class="text-dark mr-2"
          ><b-icon-calendar2-check
            class="mr-2"
            scale="0.8"
          ></b-icon-calendar2-check
          >Book Now</b-button
        >
        <b-button variant="outline-warning" class="text-dark mr-2 border"
          ><b-icon-arrow90deg-right
            class="mr-2"
            scale="0.8"
          ></b-icon-arrow90deg-right
          >Directions</b-button
        >
        <b-button variant="outline-warning" class="text-dark mr-2 border"
          ><b-icon-bookmark class="mr-2" scale="0.8"></b-icon-bookmark
          >Bookmark</b-button
        >
        <b-button variant="outline-warning" class="text-dark mr-2 border"
          ><b-icon-share class="mr-2" scale="0.8"></b-icon-share>Share</b-button
        >
      </div>
      <div class=""></div>
      <div class="mt-5">
        <h4>Tap to rate your experience</h4>
        <star-rating v-model="rating" :star-size="30"></star-rating>
        <div class="mt-3">
          <a class="text-warning" href="#">Write a Review</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BIconCalendar2Check,
  BIconArrow90degRight,
  BIconBookmark,
  BIconShare,
} from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
import restaurantService from '../../services/restaurantService'

import RatingComponent from '../../components/restaurant/RatingComponent'

export default {
  components: {
    BIconCalendar2Check,
    BIconArrow90degRight,
    BIconBookmark,
    BIconShare,
    RatingComponent,
    StarRating,
  },
  data() {
    return {
      restaurant: '',
      restaurantData: {},
    }
  },
  async mounted() {
    this.restaurant = this.$route.path.substring(1)
    this.restaurantData = await restaurantService
      .searchRestaurants(this.restaurant)
      .then((res) => {
        return res.restaurants[0].restaurant
      })
  },
}
</script>

<style scoped></style>
