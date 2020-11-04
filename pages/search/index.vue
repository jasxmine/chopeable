<template>
  <div class="container-fluid">
    <div class="row">
      <div id="filter option" class="col-sm-3 card">
        <div class="card-body">
          <h1 class="card-title">Filter</h1>
          <br />
          <h4 class="card-subtitle">Location</h4>
          <input id="location" type="text" width="500" height="100" />
          <br />
          <br />
          <h4 class="card-subtitle">Cousine Type</h4>
          <checkboxComponent
            :key="checkboxId++"
            :first8="cType.slice(0, 8)"
            :other="cType.slice(8)"
          >
          </checkboxComponent>
          <br />
        </div>
      </div>
      <div id="item" class="col-sm-9">
        <!-- <nav class="navbar navbar-expand-lg navbar-custom">
          <a class="navbar-brand" href="#">Search by Letter</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="alphaSearch" class="collapse navbar-collapse">
            <ul id="alphaItems" class="navbar-nav"></ul>
          </div>
        </nav> -->
        <div id="restaurants" class="list-group container-fluid">
          <div class="card">
            <div class="card-horizontal">
              <div class="img-square-wrapper">
                <img
                  class=""
                  src="../../static/placeholder_image.jpg"
                  alt="Card image cap"
                  width="300"
                  height="180"
                />
              </div>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <cardComponent
            v-for="restaurant in allRestaurants"
            :key="restaurant.id"
            :obj="restaurant"
          >
          </cardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardComponent from '../../components/search/cardComponent'
import checkboxComponent from '../../components/search/checkboxComponent'
import restaurantService from '../../services/restaurantService'

window.axios = require('axios')

export default {
  components: { cardComponent, checkboxComponent },
  data() {
    return {
      allRestaurants: [],
      cType: [],
      checkboxId: 0,
    }
  },
  mounted() {
    // this.getAlpha()
    restaurantService.getCuisines().then((res) => {
      const cuisineArr = JSON.parse(JSON.stringify(res))
      for (let i = 0; i < cuisineArr.cuisines.length; i++) {
        const toAdd = JSON.parse(JSON.stringify(cuisineArr.cuisines[i]))
        console.log(toAdd)
        this.cType.push(toAdd)
        // console.log(cuisineArr.cuisines[i])
      }
    })
    this.observerError(this.cType)
    restaurantService.getRestaurants().then((res) => {
      const restaurantsArr = res.restaurants
      for (let i = 0; i < restaurantsArr.length; i++) {
        const toAdd = restaurantsArr[i].restaurant
        if (toAdd.featured_image === '') {
          toAdd.featured_image = '/logo_photo.jpg'
        }
        this.allRestaurants.push(toAdd)
        // console.log(toAdd)
      }
    })
  },
  methods: {
    observerError(arr) {
      arr = JSON.parse(JSON.stringify(arr))
      for (let i = 0; i < arr.length; i++) {
        arr[i] = JSON.parse(JSON.stringify(arr[i]))
        console.log(arr[i])
      }
    },
    getAlpha() {
      const alphaList = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      for (let i = 0; i < alphaList.length; i++) {
        console.log(alphaList[i])
        const li = document.createElement('li')
        li.classList.add('nav-item')

        const a = document.createElement('a')
        a.classList.add('nav-link')
        a.href = '#'

        const strong = document.createElement('strong')
        strong.appendChild(document.createTextNode(alphaList[i]))

        a.appendChild(strong)
        li.appendChild(a)
        document.getElementById('alphaItems').appendChild(li)
      }
    },
  },
}
</script>
<style scoped>
.navbar-custom {
  background-color: white;
}
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
a {
  text-decoration: none;
}
</style>
