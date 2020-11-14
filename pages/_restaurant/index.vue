<template>
  <div @click="emptyFocusOut" @mouseover="canScroll">
    <div v-if="restaurantData.location">
      <div class="container vh-100 mt-5 p-0">
        <img :src="restaurantData.featured_image" />
        <div class="d-flex justify-content-between">
          <h1>
            {{ restaurantData.name }}
          </h1>
          <div
            v-if="restaurantData.user_rating"
            class="d-flex align-content-center mt-5"
          >
            <div
              v-for="ratings in parseInt(
                restaurantData.user_rating.aggregate_rating
              )"
              :key="ratings"
            >
              <RatingComponent />
            </div>
            <h4 class="m-0 mt-1 ml-2">
              {{ restaurantData.user_rating.aggregate_rating }}
            </h4>
          </div>
        </div>
        <h4 class="text-muted">
          {{ `${restaurantData.establishment} - ${restaurantData.cuisines}` }}
        </h4>
        <h5>
          {{ restaurantData.location && restaurantData.location.locality }}
        </h5>
        <p>{{ restaurantData.timings }}</p>
        <p>Contact Us @ {{ restaurantData.phone_numbers }}</p>
        <div class="mt-4">
          <a :href="'/' + restaurant + '/reservation'">
            <b-button variant="warning" class="text-dark mr-2">
              <b-icon-calendar2-check
                class="mr-2"
                scale="0.8"
              ></b-icon-calendar2-check
              >Book Now
            </b-button>
          </a>
          <a
            v-if="restaurantData.location"
            :href="
              'https://www.google.com/maps/dir/?api=1&amp;destination=' +
              restaurantData.location.latitude +
              ',' +
              restaurantData.location.longitude
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <b-button variant="outline-warning" class="text-dark mr-2 border">
              <b-icon-arrow90deg-right
                class="mr-2"
                scale="0.8"
              ></b-icon-arrow90deg-right
              >Directions
            </b-button>
          </a>
          <span v-if="bookmarked">
            <b-button
              variant="warning"
              class="text-dark mr-2 border"
              @click="bookmarked = !bookmarked"
            >
              <b-icon-bookmark-check-fill
                class="mr-2"
                scale="0.8"
              ></b-icon-bookmark-check-fill
              >Bookmarked
            </b-button>
          </span>
          <span v-else>
            <b-button
              variant="outline-warning"
              class="text-dark mr-2 border"
              @click="bookmarked = !bookmarked"
            >
              <b-icon-bookmark class="mr-2" scale="0.8"></b-icon-bookmark
              >Bookmark
            </b-button>
          </span>
          <b-button variant="outline-warning" class="text-dark mr-2 border">
            <b-icon-share class="mr-2" scale="0.8"></b-icon-share>Share
          </b-button>
        </div>
        <div class="restaurantContent">
          <h2 class="mb-3">About this place</h2>
          <div v-if="restaurantData.location">
            <h3 class="mt-5 mb-4">Queue Info</h3>
            <div>
              <div v-for="event in events" :key="event.key">
                <div v-if="event.name === restaurantData.name">
                  <p>Currently {{ event.queue }} in the queue</p>
                  <p>Estimated queue time is {{ output }} min</p>
                </div>
              </div>
            </div>

            <h3 class="mt-5 mb-4">Address</h3>
            <p>{{ restaurantData.location.address }}</p>
            <MapComponent
              :latitude="parseFloat(restaurantData.location.latitude)"
              :longitude="parseFloat(restaurantData.location.longitude)"
            />
          </div>
          <h3 class="mt-5 mb-4">Cuisines</h3>
          <div class="d-flex">
            <div v-for="cuisine in restaurantCuisinesArray" :key="cuisine">
              <b-button pill variant="outline-secondary border mr-3">{{
                cuisine
              }}</b-button>
            </div>
          </div>
          <h3 class="mt-5 mb-4">Additional Information</h3>
          <div class="additionalInfo">
            <div
              v-for="highlight in restaurantData.highlights"
              :key="highlight"
            >
              <div class="descriptionInfo">
                <i class="mr-2" color="#119199" size="20"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#119199"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    class="rbbb40-0 kIxlGM"
                  >
                    <linearGradient
                      id="ckgxrfr1x00c23b65udb34ocp"
                      x1="0"
                      x2="100%"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="0" stop-color="#119199"></stop>
                      <stop offset="100%" stop-color="#119199"></stop>
                    </linearGradient>
                    <path
                      d="M1.5 10C1.5 5.3125 5.3125 1.5 10 1.5C14.6875 1.5 18.5 5.3125 18.5 10C18.5 14.6875 14.6875 18.5 10 18.5C5.3125 18.5 1.5 14.6875 1.5 10ZM0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM13.75 7.25L8.75 12.1875L6.25 9.75C5.9375 9.4375 5.5 9.4375 5.1875 9.75C4.875 10 4.875 10.5 5.1875 10.8125L8.1875 13.8125C8.3125 13.9375 8.5 14.0625 8.75 14.0625C8.9375 14.0625 9.125 14 9.25 13.8125L14.75 8.3125C15.0625 8 15.0625 7.5625 14.75 7.25C14.4375 6.9375 14 6.9375 13.75 7.25Z"
                      fill="url(#ckgxrfr1x00c23b65udb34ocp)"
                    ></path></svg
                ></i>
                <p color="#4F4F4F">{{ highlight }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <h4>Tap to rate your experience</h4>
          <star-rating v-model="rating" :star-size="30"></star-rating>
          <div class="mt-3">
            <a class="text-warning" href="#">Write a Review</a>
          </div>
        </div>
        <theFooter />
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
import { db } from '@/main'
import {
  BIconCalendar2Check,
  BIconArrow90degRight,
  BIconBookmark,
  BIconBookmarkCheckFill,
  BIconShare,
} from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
import restaurantService from '../../services/restaurantService'
import RatingComponent from '../../components/restaurant/RatingComponent'
import MapComponent from '../../components/restaurant/MapComponent'
import theFooter from '../../components/theFooter'
export default {
  components: {
    BIconCalendar2Check,
    BIconArrow90degRight,
    BIconBookmark,
    BIconBookmarkCheckFill,
    BIconShare,
    RatingComponent,
    MapComponent,
    StarRating,
    theFooter,
  },
  layout: 'restaurantPage',
  data() {
    return {
      restaurant: '',
      restaurantData: {},
      bookmarked: false,
      events: [],
      event: '',
      counter: 0,
    }
  },
  computed: {
    restaurantCuisinesArray() {
      return (
        this.restaurantData.cuisines && this.restaurantData.cuisines.split(',')
      )
    },
    output() {
      return this.event * 10
    },
  },
  async mounted() {
    this.restaurant = this.$route.path.substring(1)
    this.restaurantData = await restaurantService
      .searchRestaurants(this.restaurant)
      .then((res) => {
        this.loadFooter = true
        return res.restaurants[0].restaurant
      })
    this.event = await db
      .collection('restaurant')
      .get()
      .then((snap) => {
        const events = []

        snap.forEach((doc) => {
          const appData = doc.data()
          appData.id = doc.id
          events.push(doc.data())
        })
        this.events = events

        return this.events[0].queue
      })
  },
  methods: {
    async getEvents() {
      const snapshot = await db.collection('restaurant').get()
      const events = []
      snapshot.forEach((doc) => {
        const appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
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
.restaurantContent {
  font-size: 1.8rem;
}

.additionalInfo {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}

.descriptionInfo {
  width: 30rem;
  padding: 0px 5px 10px 0px;
  display: flex;
  align-items: flex-start;
  align-content: center;
}

footer {
  position: absolute;
  left: 0;
}
</style>
