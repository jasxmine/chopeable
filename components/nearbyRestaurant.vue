<template>
  <div class="row mx-auto" style="width: 90%">
    <div
      v-for="a_restaurant in nearbyRestaurants"
      :key="a_restaurant.id"
      class="centerize col-md-4"
    >
      <nuxt-link
        :to="'/' + a_restaurant.url"
        style="text-decoration: none; color: black"
      >
        <div class="card mb-4 h-100">
          <img
            :src="a_restaurant.image"
            alt="why though"
            width="100%"
            height="250px"
            class="hoverGrey"
          />
          <div class="card-body">
            <p class="card-text">
              <b> {{ a_restaurant.name }} </b>
              <br />
              {{ a_restaurant.cuisine }}
              <br />
              {{ a_restaurant.address }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: 'NearbyRestaurant',
  props: ['nearbyRestaurants'],
}
</script>
