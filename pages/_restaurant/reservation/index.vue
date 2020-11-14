<template>
  <div class="page mb-5" @click="emptyFocusOut" @mouseover="canScroll">
    <div class="container">
      <b-form v-if="show" @submit="onSubmit">
        <h3 class="text-center m-0 py-5"><b>Complete your reservation</b></h3>
        <div class="container content">
          <h2 class="mt-1 mb-4">
            {{ restaurantData.name }}
          </h2>
          <b-form-group
            id="noOfPax-group"
            label="Number of people:"
            label-for="noOfPax"
          >
            <b-form-select
              id="noOfPax"
              v-model="form.pax"
              :options="paxOptions"
            ></b-form-select>
          </b-form-group>

          <b-form-group id="date-group-2" label="Date:" label-for="date">
            <b-form-datepicker
              id="date"
              v-model="form.date"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group id="time-group" label="Time:" label-for="time">
            <b-form-timepicker
              id="time"
              v-model="form.time"
              locale="en"
            ></b-form-timepicker>
          </b-form-group>
        </div>
        <h4 class="text-center m-0 py-5"><b>Continue with</b></h4>
        <div class="container content mt-5">
          <b-form-group
            id="email-group"
            label="Email address:"
            label-for="email"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="name-group" label="Your Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </div>
        <h4 class="text-center m-0 py-5"><b>Additional Information</b></h4>
        <div class="container content mt-5">
          <b-form-group
            id="request-group"
            label="Special Request:"
            label-for="request"
            description="E.g. table preference, space for a stroller..."
          >
            <b-form-input
              id="request"
              v-model="form.request"
              type="text"
              required
              placeholder="Special Request?"
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button type="submit" variant="warning" block class="mt-5"
          >Reserve Now</b-button
        >
      </b-form>
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
      paxOptions: [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
      ],
      form: {
        pax: 1,
        date: new Date(),
        time: new Date().getTime(),
        email: '',
        name: '',
        request: '',
      },
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
