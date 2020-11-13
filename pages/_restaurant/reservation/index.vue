<template>
  <div class="page" @click="emptyFocusOut" @mouseover="canScroll">
    <h3 class="text-center my-5"><b>Complete your reservation</b></h3>
    <div class="container content">
      <h2 class="mt-1 mb-4">
        {{ restaurantData.name }}
      </h2>
      <div>
        <b-form v-if="show" @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4" v-model="form.checked">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="warning">Reserve Now</b-button>
        </b-form>
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
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn',
      ],
      show: true,
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
    onSubmit(evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
    },
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
