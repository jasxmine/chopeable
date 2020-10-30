<template>
  <div>
    <div class="container mt-5 p-0">
      <img :src="restaurantData.featured_image" />
      <div class="d-flex justify-content-between">
        <h1>
          {{ restaurantData.name }}
        </h1>
      </div>
      <h4 class="text-muted">
        {{ `${restaurantData.establishment} - ${restaurantData.cuisines}` }}
      </h4>
      <h5>
        {{ restaurantData.location && restaurantData.location.locality }}
      </h5>
      <p>{{ restaurantData.timings }}</p>
    </div>
  </div>
</template>

<script>
import restaurantService from '../../services/restaurantService'

export default {
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
