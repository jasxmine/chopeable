<template>
  <div @click="emptyFocusOut" @mouseover="canScroll">
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
