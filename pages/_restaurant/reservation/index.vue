<template>
  <div>
    <h1>
      {{ restaurantData.name }}
    </h1>
  </div>
</template>

<script>
import restaurantService from '../../../services/restaurantService'

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
