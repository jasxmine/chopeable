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
          <div
            id="restaurantListNearby0"
            class="row mx-auto"
            style="width: 90%"
          ></div>
        </div>
        <div class="carousel-item">
          <div
            id="restaurantListNearby1"
            class="row mx-auto"
            style="width: 90%"
          ></div>
        </div>
        <div class="carousel-item">
          <div
            id="restaurantListNearby2"
            class="row mx-auto"
            style="width: 90%"
          ></div>
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

<script>
import restaurantService from '../services/restaurantService'
import cuisine from '../components/cuisine'

window.axios = require('axios')
export default {
  components: { cuisine },
  data() {
    return {
      cuisineResList1: [],
      cuisineResList2: [],
      cuisineResList3: [],
      carousel1: false,
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
    },
    canScroll() {
      document.documentElement.style['overflow-y'] = 'scroll'
      document.documentElement.style.position = 'static'
    },
    successCallback2(result) {
      console.log(result)
    },
    nearbyRes() {
      const successCallback = (position) => {
        this.carousel1 = true
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude)
        console.log(longitude)

        const request = new XMLHttpRequest()
        request.onreadystatechange = function () {
          document.getElementById('restaurantListNearby1').innerHTML = ''
          document.getElementById('restaurantListNearby0').innerHTML = ''
          document.getElementById('restaurantListNearby2').innerHTML = ''
          console.log(JSON.parse(this.responseText))
          const parsed = JSON.parse(this.responseText).nearby_restaurants

          const smallerParsed = parsed.slice(0, 9)
          document.getElementById('discoverNearby').innerHTML = ''
          const discoverNearby = document.getElementById('discoverNearby')
          const h3 = document.createElement('h3')
          h3.innerHTML = 'Discover nearby restaurants'
          discoverNearby.appendChild(h3)
          let i = 0
          for (const index of smallerParsed) {
            const restaurantName = index.restaurant.name
            let imageThumb = index.restaurant.featured_image
            if (imageThumb === '') {
              imageThumb = '/logo_photo.jpg'
            }
            const image = document.createElement('img')
            const a = document.createElement('a')
            let restaurantUrl = index.restaurant.url
            const cuisines = index.restaurant.cuisines
            const indexQuestion = restaurantUrl.indexOf('?')
            restaurantUrl = restaurantUrl.slice(33, indexQuestion)
            a.setAttribute('href', `/${restaurantUrl}`)
            a.setAttribute('style', 'text-decoration:none;color:black;')
            image.setAttribute('src', imageThumb)
            image.setAttribute('alt', 'why though')
            image.setAttribute('width', '100%')
            image.setAttribute('height', '250px')
            image.setAttribute('class', 'hoverGrey')
            let streetAddress = index.restaurant.location.address
            const indexComma = streetAddress.indexOf(',')
            streetAddress = streetAddress.slice(0, indexComma)
            const div = document.createElement('div')
            div.setAttribute('class', 'col-md-4 py-2')
            const divCard = document.createElement('div')
            divCard.setAttribute('class', 'card mb-4 h-100')
            a.appendChild(divCard)
            div.appendChild(a)
            const divCardBody = document.createElement('div')
            divCardBody.setAttribute('class', 'card-body')
            divCard.appendChild(image)
            divCard.appendChild(divCardBody)
            const p = document.createElement('p')
            p.setAttribute('class', 'card-text')
            p.innerHTML = `<b> ${restaurantName} </b> <br> ${cuisines} <br> ${streetAddress}`
            const id = 'restaurantListNearby' + (i % 3)
            divCardBody.appendChild(p)
            document.getElementById(id).appendChild(div)
            i++
          }
        }
        request.open(
          'GET',
          'https://developers.zomato.com/api/v2.1/geocode?lat=' +
            latitude +
            '&lon=' +
            longitude +
            '&apikey=02296a90b8223f66ba4289b019fa8f42',
          true
        )
        request.send()
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
.hoverGrey:hover {
  opacity: 0.7;
}
</style>
