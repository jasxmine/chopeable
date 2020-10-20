<template>
  <div
    style="margin-top: 0px"
    @click="emptyFocusOut"
    @mouseover="canScroll"
    @load="console.log(1)"
  >
    <div class="header" style="text-align: middle">
      <br /><br /><br /><br /><br />
      <br />
      <br />
      <br />
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
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel"
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
const successCallback = (position) => {
  const userLoc = position
  const latitude = userLoc.coords.latitude
  const longitude = userLoc.coords.longitude
  const request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    document.getElementById('restaurantListNearby1').innerHTML = ''
    document.getElementById('restaurantListNearby0').innerHTML = ''
    document.getElementById('restaurantListNearby2').innerHTML = ''
    const parsed = JSON.parse(this.responseText).restaurants

    const smallerParsed = parsed.slice(0, 9)
    console.log(smallerParsed)
    document.getElementById('discoverNearby').innerHTML = ''
    const discoverNearby = document.getElementById('discoverNearby')
    const h3 = document.createElement('h3')
    h3.innerHTML = 'Discover nearby restaurants'
    discoverNearby.appendChild(h3)
    let i = 0
    for (const index of smallerParsed) {
      const restaurantName = index.restaurant.name
      const imageThumb = index.restaurant.featured_image
      const image = document.createElement('img')
      image.setAttribute('src', imageThumb)
      image.setAttribute('alt', 'why though')
      image.setAttribute('width', '100%')
      let streetAddress = index.restaurant.location.address
      const indexComma = streetAddress.indexOf(',')
      streetAddress = streetAddress.slice(0, indexComma)
      const div = document.createElement('div')
      div.setAttribute('class', 'col-md-4')
      const divCard = document.createElement('div')
      divCard.setAttribute('class', 'card mb-4')
      div.appendChild(divCard)
      const divCardBody = document.createElement('div')
      divCardBody.setAttribute('class', 'card-body')
      divCard.appendChild(image)
      divCard.appendChild(divCardBody)
      const p = document.createElement('p')
      p.setAttribute('class', 'card-text')
      p.innerHTML = `<b> ${restaurantName} </b> <br> ${streetAddress}`
      const id = 'restaurantListNearby' + (i % 3)
      divCardBody.appendChild(p)
      document.getElementById(id).appendChild(div)
      i++
    }
  }
  request.open(
    'GET',
    'https://developers.zomato.com/api/v2.1/search?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&apikey=e5567dabfe03e800b9c322a7c552684d',
    true
  )
  request.send()
}

const errorCallback = (error) => {
  console.log(error)
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
window.axios = require('axios')
export default {
  methods: {
    emptyFocusOut() {
      this.searchResult = []
      document.getElementById('displaySearch').style.display = 'none'
    },
    canScroll() {
      document.documentElement.style['overflow-y'] = 'scroll'
      document.documentElement.style.position = 'static'
    },
    getCurrentLoc() {
      console.log(1)
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
  background-image: url('../header_wallp.jpg');
  height: 400px;
  text-align: center;
}
.white_text {
  color: white;
  font-weight: bold;
}
.leftMargin {
  margin-left: 10%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: #fc450d;
  border-radius: 50%;
  top: calc(50% - 25px);
  opacity: 0.8;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
