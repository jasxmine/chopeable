<template>
  <div @click="emptyFocusOut" @mouseover="canScroll">
    <div class="row" style="margin-left: 10%; margin-right: 10%">
      <div class="col-3">
        <div style="height: 60vh; width: 100%; border: 1px solid grey">
          <div style="height: 30%; margin-bottom: 30px">
            <img :src="userPic" class="image" width="30%" />
            <div style="margin-top: 30px"></div>
            <h3>{{ userName }}</h3>
          </div>
          <a :class="{ orangeText: clickedReservartion }">
            <div class="section" @click="showReservation()">
              <div v-if="clickedReservartion" class="clicked"></div>
              Reservation
            </div>
          </a>
          <a :class="{ orangeText: clickedCredits }">
            <div class="section" @click="showCredits()">
              <div v-if="clickedCredits" class="clicked"></div>
              Credits
            </div>
          </a>
          <a :class="{ orangeText: clickedRewards }">
            <div class="section" @click="showRewards()">
              <div v-if="clickedRewards" class="clicked"></div>
              Redeem Rewards
            </div>
          </a>
        </div>
      </div>
      <div class="col-9">
        <div v-if="clickedReservartion">
          <div class="reservationTitle" style="text-align: left">
            <h2 class="my-auto">Upcoming reservations:</h2>
          </div>

          <div v-if="haveReservation == 0">
            <div>
              <br />
              <br />
              <nuxt-link
                to="/search"
                style="color: initial"
                class="classicLink"
              >
                <button class="btn btn-warning">Make a reservation now!</button>
              </nuxt-link>
            </div>
          </div>
          <br />
          <div v-for="booking in bookings" :key="booking.id">
            <div
              v-if="currentMilli < booking.milli"
              :haveReservation="1"
              class="card mb-3"
            >
              <div class="row no-gutters">
                <div
                  class="col-md-4"
                  style="border-right: 1px solid lightgrey; height: 200px"
                >
                  <img
                    src="/logo_photo.jpg"
                    style="max-width: 100%; max-height: 100%"
                    class="image"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="text-align: left">
                    <h3 style="margin-bottom: 20px; margin-top: ">
                      <b> {{ booking.restaurant }} </b>
                    </h3>
                    <h4 class="card-text">
                      Date: {{ booking.date[0] }}
                      <br />
                      <br />

                      Time: {{ booking.date[1] }}
                      <br />
                      <br />

                      Number of people: {{ booking.numberOfPeople }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div class="reservationTitle" style="text-align: left">
            <h2 class="my-auto">Past reservations:</h2>
          </div>
          <br />
          <div v-for="booking in bookings" :key="booking.id">
            <div v-if="currentMilli >= booking.milli" class="card mb-3">
              <div class="row no-gutters">
                <div
                  class="col-md-4"
                  style="border-right: 1px solid lightgrey; height: 200px"
                >
                  <img
                    src="/logo_photo.jpg"
                    style="max-width: 100%; max-height: 100%"
                    class="image"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="text-align: left">
                    <h3 style="margin-bottom: 20px; margin-top: ">
                      <b> {{ booking.restaurant }} </b>
                    </h3>
                    <h4 class="card-text">
                      Date: {{ booking.date[0] }}
                      <br />
                      <br />

                      Time: {{ booking.date[1] }}
                      <br />
                      <br />

                      Number of people: {{ booking.numberOfPeople }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="clickedCredits">
          <h1>You have {{ userCredits }} credits</h1>
          <div v-if="userCredits > 0">
            <button class="btn btn-warning" @click="showRewards()">
              Redeem rewards now!
            </button>
          </div>
        </div>
        <div v-if="clickedRewards">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-12">
                <div class="card-body">
                  <h3 style="margin-bottom: 20px; margin-top: ">
                    Get a free beverage on Ichiban Boshi Novena
                  </h3>
                  <h4 class="card-text">
                    Credits needed: 150
                    <br />
                    <br />

                    Valid for: 1 month (from redeem date)
                    <br />
                    <br />
                  </h4>
                </div>
                <b-button disabled size="lg" variant="warning"
                  >Redeem now!</b-button
                >
                <div style="margin-bottom: 10px"></div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-12">
                <div class="card-body">
                  <h3 style="margin-bottom: 20px; margin-top: ">
                    Get 20% discount on your next bookings
                  </h3>
                  <h4 class="card-text">
                    Credits needed: 500
                    <br />
                    <br />

                    Valid for: 1 month (from redeem date)
                    <br />
                    <br />
                  </h4>
                </div>
                <b-button disabled size="lg" variant="warning"
                  >Redeem now!</b-button
                >
                <div style="margin-bottom: 10px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  min-height: 100%;
}
.section {
  width: 100%;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  height: 10%;
  vertical-align: middle;
  line-height: 3;
  clear: both;
  cursor: pointer;
}
.image {
  border-radius: 50%;
  margin: auto;
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
div {
  text-align: center;
}
.clicked {
  width: 2%;
  background-color: orange;
  float: left;
  color: orange;
  height: 100%;
}
a,
a:link {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: orange;
}
.orangeText {
  color: orange;
}
.reservationTitle {
  text-align: left;
  background-color: rgb(233, 233, 233);
}
</style>

<script>
import { db } from '@/main'

export default {
  data() {
    return {
      userEmail: localStorage.user,
      userName: localStorage.name,
      userPic: localStorage.image,
      userCredits: localStorage.credits,
      clickedReservartion: false,
      clickedCredits: false,
      clickedRewards: false,
      bookings: [],
      loaded: [],
      currentTime: new Date(),
      currentMilli: Date.now(),
      haveReservation: 0,
    }
  },
  mounted() {
    this.loadNow()
  },
  created() {
    if (this.userEmail === '0') {
      location.replace('/app')
    }
  },
  methods: {
    showReservation() {
      this.clickedCredits = false
      this.clickedRewards = false
      this.clickedReservartion = true
      this.bookings = this.loaded
    },
    showCredits() {
      this.clickedReservartion = false
      this.clickedCredits = true
      this.clickedRewards = false
    },
    showRewards() {
      this.clickedReservartion = false
      this.clickedCredits = false
      this.clickedRewards = true
    },
    async loadNow() {
      const bookingList = await db.collection('booking').get()
      const books = []
      bookingList.forEach((doc) => {
        const book = doc.data()

        book.milli = Date.parse(book.date)

        book.date = book.date.split(' ')
        if (book.date[1] !== undefined) {
          book.date[1] = book.date[1].slice(0, 5)
        }
        book.restaurant = book.restaurant.split('-')
        for (let i = 0; i < book.restaurant.length; i++) {
          book.restaurant[i] =
            book.restaurant[i].charAt(0).toUpperCase() +
            book.restaurant[i].slice(1)
        }
        book.restaurant = book.restaurant.join(' ')

        books.push(book)
        if (this.currentMilli < book.milli) {
          this.haveReservation = 1
        }
      })
      this.loaded = books
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
