<template>
  <div class="page" @click="emptyFocusOut" @mouseover="canScroll">
    <div v-if="restaurantData.name" class="container text-center">
      <h1>Your reservation at {{ restaurantData.name }} has been confirmed!</h1>
      <div class="content mt-5 p-5">
        <h1>Thanks!</h1>
        <p>We sent a confirmation email to you!</p>
        <p>Your reservation number is <b>#123451234</b></p>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-center mt-5">
        <b-spinner
          style="width: 5rem; height: 5rem"
          label="Large Spinner"
        ></b-spinner>
      </div>
    </div>
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
  methods: {
    emptyFocusOut() {
      // onclick, this function will close the search bar
      this.searchResult = []
      document.getElementById('displaySearch').style.display = 'none'
    },
    canScroll() {
      // this makes the whole page scrollable
      document.documentElement.style.position = 'static'
      document.documentElement.style['overflow-y'] = 'auto'
      document.documentElement.style['overflow-x'] = 'hidden'
    },
  },
}
</script>

<style scoped>
.page {
  background: #f7f8fa;
  height: 100vh;
}
.content {
  background: #ffffff;
}
</style>
