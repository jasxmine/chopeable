<template>
  <div class="page">
    <h3 class="text-center m-0 py-5"><b>Complete your reservation</b></h3>
    <div class="container content">
      <h2 class="mt-1 mb-4">
        {{ restaurantData.name }}
      </h2>
      <div>
        <b-form v-if="show" @submit="onSubmit">
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

          <b-form-group id="input-group-3" label="Time:" label-for="input-3">
            <b-form-timepicker
              v-model="form.time"
              locale="en"
            ></b-form-timepicker>
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
