<template>
  <div style="margin-top: 0px" @click="emptyFocusOut" @mouseover="canScroll">
    <div class="header" style="text-align: middle">
      <br /><br /><br /><br />
      <h3 class="white_text" style="font-size: 50px">
        Don't know what to eat?
      </h3>
      <h5 class="white_text" style="font-size: 25px; width: 100%">
        discover, book, and dine with us
      </h5>
    </div>

    <br />
    <div id="discoverNearby" class="leftMargin"></div>
    <br />
    <div
      id="carousel"
      class="carousel slide"
      data-ride="true"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <nearbyRestaurant :nearby-restaurants="nearbyResList1" />
        </div>
        <div class="carousel-item">
          <nearbyRestaurant :nearby-restaurants="nearbyResList2" />
        </div>
        <div class="carousel-item">
          <nearbyRestaurant :nearby-restaurants="nearbyResList3" />
        </div>
      </div>
      <a
        v-if="carousel1"
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        v-if="carousel1"
        class="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div id="cuisineCarousel" class="leftMargin">
      <h3>Discover cuisines</h3>
    </div>
    <br />
    <div
      id="carousel2"
      class="carousel slide"
      data-ride="true"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <cuisine :cuisine="cuisineResList1" />
        </div>
        <div class="carousel-item">
          <cuisine :cuisine="cuisineResList2" />
        </div>
        <div class="carousel-item">
          <cuisine :cuisine="cuisineResList3" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel2"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel2"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import restaurantService from '../services/restaurantService'
import cuisine from '../components/cuisine'
window.axios = require('axios')
import nearbyRestaurant from '../components/nearbyRestaurant'
export default {
  components: { cuisine, nearbyRestaurant },
  data() {
    return {
      cuisineResList1: [],
      cuisineResList2: [],
      cuisineResList3: [],
      carousel1: false,
      nearbyResList1: [],
      nearbyResList2: [],
      nearbyResList3: [],
    }
  },
  mounted() {
    this.nearbyRes()
    restaurantService.getCuisines().then((res) => {
      const cuisineResult = res.cuisines
      const cuisineList = [
        'American',
        'Chinese',
        'Desserts',
        'French',
        'Italian',
        'Japanese',
        'Malaysian',
        'Steak',
        'Steamboat',
      ]
      for (let i = 0; i < cuisineResult.length; i++) {
        if (cuisineList.includes(cuisineResult[i].cuisine.cuisine_name)) {
          let cuisineName = cuisineResult[i].cuisine.cuisine_name
          cuisineName = cuisineName.toString()
          cuisineName = cuisineName.toLowerCase()
          cuisineResult[i].cuisine.url = `/${cuisineName}.jpg`
          if (this.cuisineResList1.length < 3) {
            this.cuisineResList1.push(cuisineResult[i].cuisine)
          } else if (this.cuisineResList2.length < 3) {
            this.cuisineResList2.push(cuisineResult[i].cuisine)
          } else {
            this.cuisineResList3.push(cuisineResult[i].cuisine)
          }
        }
      }
    })
  },
  methods: {
    emptyFocusOut() {
      this.searchResult = []
      document.getElementById('displaySearch').style.display = 'none'
    },
    canScroll() {
      document.documentElement.style.position = 'static'
      document.documentElement.style['overflow-y'] = 'auto'
      document.documentElement.style['overflow-x'] = 'hidden'
    },
    cannotScroll() {
      document.documentElement.style.position = 'fixed'
      document.documentElement.style['overflow-y'] = 'scroll'
      document.documentElement.style['overflow-x'] = 'hidden'
    },
    async nearbyRes() {
      const successCallback = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        try {
          axios
            .get(
              'https://developers.zomato.com/api/v2.1/geocode?lat=' +
                latitude +
                '&lon=' +
                longitude +
                '&apikey=02296a90b8223f66ba4289b019fa8f42'
            )
            .then((response) => {
              let nearbyRestaurantList = response.data.nearby_restaurants
              nearbyRestaurantList = nearbyRestaurantList.slice(0, 9)
              for (let i = 0; i < nearbyRestaurantList.length; i++) {
                let restaurant = nearbyRestaurantList[i].restaurant
                // Name
                let name = restaurant.name
                // Cuisines
                let cuisines = restaurant.cuisines
                cuisines = cuisines.split(', ')
                cuisines = cuisines.slice(0, 4)
                cuisines = cuisines.join(', ')
                // Image
                let imageThumb = restaurant.featured_image
                if (imageThumb === '') {
                  imageThumb = '/logo_photo.jpg'
                }
                // URL
                let restaurantUrl = restaurant.url
                const indexQuestion = restaurantUrl.indexOf('?')
                restaurantUrl = restaurantUrl.slice(33, indexQuestion)
                // Address
                let streetAddress = restaurant.location.address
                const indexComma = streetAddress.indexOf(',')
                streetAddress = streetAddress.slice(0, indexComma)
                let restaurantObj = {
                  name: name,
                  address: streetAddress,
                  image: imageThumb,
                  url: restaurantUrl,
                  cuisine: cuisines,
                }
                if (this.nearbyResList1.length < 3) {
                  this.nearbyResList1.push(restaurantObj)
                } else if (this.nearbyResList2.length < 3) {
                  this.nearbyResList2.push(restaurantObj)
                } else {
                  this.nearbyResList3.push(restaurantObj)
                }
              }
              document.getElementById('discoverNearby').innerHTML = ''
              const discoverNearby = document.getElementById('discoverNearby')
              const h3 = document.createElement('h3')
              h3.innerHTML = 'Discover nearby restaurants'
              discoverNearby.appendChild(h3)
              this.carousel1 = true
            })
        } catch {}
      }

      const errorCallback = (error) => {
        console.log(error)
      }
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    },
  },
}
</script>

<style>
li {
  margin-left: 20px;
  margin-right: 20px;
}
.header {
  background-image: url('/header_wallp.jpg');
  height: 300px;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.white_text {
  color: white;
  font-weight: bold;
}
.leftMargin {
  margin-left: 6%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 50%;
  top: calc(50% - 25px);
  opacity: 0.8;
  margin-left: 5%;
  margin-right: 5%;
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 0.5;
}
.hoverGrey:hover {
  opacity: 0.7;
}
</style>
