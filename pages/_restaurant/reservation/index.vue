<template>
  <div>
    <div class="page" @click="emptyFocusOut" @mouseover="canScroll">
      <div v-if="restaurantData.name" class="container">
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
                required
              ></b-form-datepicker>
            </b-form-group>

            <b-form-group id="time-group" label="Time:" label-for="time">
              <b-form-timepicker
                id="time"
                v-model="form.time"
                locale="en"
                required
              ></b-form-timepicker>
            </b-form-group>
          </div>
          <h4 class="text-center m-0 pt-5"><b>Continue with</b></h4>
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
          <h4 class="text-center m-0 pt-5"><b>Payment</b></h4>
          <div class="container content mt-5">
            <p>
              To prevent no show, a deposit of $10 will have to be made to
              reservation
            </p>
            <h5>Please give us your payment details:</h5>
            <card
              class="stripe-card border"
              :class="{ complete }"
              stripe="pk_test_WEM18IMCp1Q4QF5MP1mbpRXz00gUKbr5Gz"
              :options="stripeOptions"
              @change="complete = $event.complete"
            />
          </div>
          <h4 class="text-center m-0 pt-5"><b>Additional Information</b></h4>
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
                placeholder="Special Request?"
              ></b-form-input>
            </b-form-group>
          </div>
          <b-button type="submit" variant="warning" block class="mt-5"
            >Reserve Now</b-button
          >
        </b-form>
      </div>

      <div v-else>
        <div class="d-flex justify-content-center mt-5">
          <b-spinner
            style="width: 5rem; height: 5rem"
            label="Large Spinner"
          ></b-spinner>
        </div>
      </div>
      <theFooter />
    </div>
    <script src="https://js.stripe.com/v3/"></script>
  </div>
</template>

<script>
import { db } from '@/main'
import { Card, createToken } from 'vue-stripe-elements-plus'
import emailjs from 'emailjs-com'
import restaurantService from '../../../services/restaurantService'
import theFooter from '../../../components/theFooter'

export default {
  components: {
    theFooter,
    Card,
  },
  layout: 'restaurantPage',
  data() {
    return {
      restaurant: '',
      restaurantData: {},
      userEmail: localStorage.user,
      userName: localStorage.name,
      userCredits: localStorage.credits,
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
      complete: false,
      stripeOptions: {},
    }
  },
  async mounted() {
    this.restaurant = this.$route.path.split('/')[1]
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
      this.sendEmail(evt)
      this.addEvent()
      this.addBooking()
      this.pay()
      this.$router.push('/' + this.restaurant + '/confirmation')
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
    sendEmail: (e) => {
      emailjs
        .sendForm(
          'gmail',
          'template_M4djP4WK',
          e.target,
          'user_h0WwXWQ7W36bXKltap0N8'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
          },
          (error) => {
            console.log('FAILED...', error)
          }
        )
    },
    async addEvent() {
      if (this.form.name && this.form.date) {
        await db.collection('calEvent').add({
          name: this.form.name,
          details: this.form.pax,
          start:
            this.form.date.toISOString().substr(0, 10) + ' ' + this.form.time,
          end:
            this.form.date.toISOString().substr(0, 10) + ' ' + this.form.time,
          color: '#1976D2',
        })
      } else {
        alert('You must enter name, date and time!')
      }
    },
    async addBooking() {
      if (this.restaurant && this.form.date) {
        await db.collection('booking').add({
          date:
            this.form.date.toISOString().substr(0, 10) + ' ' + this.form.time,
          numberOfPeople: this.form.pax,
          restaurant: this.restaurant,
        })
      } else {
        alert('You must enter date and number of pax!')
      }
    },
    pay() {
      createToken().then((data) => console.log(data.token))
    },
  },
}
</script>

<style scoped>
.page {
  background: #f7f8fa;
  height: 120%;
}
.content {
  background: #ffffff;
}
</style>
