<template>
  <div class="container-fluid">
    <div class="row">
      <div id="filter option" class="col-sm-3 card">
        <div class="card-body">
          <h3 class="card-title">Filter</h3>
          <br />
          <h4 class="card-subtitle">Location</h4>
          <input id="location" type="text" />
          <br />
          <br />
          <h4 class="card-subtitle">Cousine Type</h4>
          <form id="cuisineTypes"></form>
          <button type="button" class="btn btn-warning">Search</button>
        </div>
      </div>
      <div id="item" class="col-sm-9">
        <nav class="navbar navbar-expand-lg navbar-custom">
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
        </nav>
        <div id="restaurants" class="list-group">
          <!-- <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start"
            style="border-radius: 0"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">Restaurant Name</h3>
              <small class="text-muted">%mil from location%</small>
            </div>
            <img src="/desserts.jpg" alt="%Restaurant Pic" />
            <p class="mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <small class="text-muted">%Additional Info% </small>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import restaurantService from '../../services/restaurantService'

window.axios = require('axios')

export default {
  mounted() {
    this.getAlpha()
    this.getCuisineTypes()
    restaurantService.getRestaurants().then((res) => {
      const restaurantsArr = res.restaurants
      for (let i = 0; i < restaurantsArr.length; i++) {
        this.generateCards(restaurantsArr[i].restaurant)
      }
    })
  },
  methods: {
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
    generateCards(obj) {
      const mainA = document.createElement('a')
      mainA.classList.add('list-group-item')
      mainA.classList.add('list-group-item-action')
      mainA.classList.add('flex-column')
      mainA.classList.add('align-item-start')
      mainA.style.borderRadius = '0'

      const divTitle = document.createElement('div')
      divTitle.classList.add('d-flex')
      divTitle.classList.add('w-100')
      divTitle.classList.add('justify-between-content')

      const h3RestaurantName = document.createElement('h3')
      h3RestaurantName.classList.add('mb-1')
      h3RestaurantName.appendChild(document.createTextNode(obj.name))

      // const smallLoc = document.createElement('small')
      // smallLoc.classList.add('text-muted')
      // smallLoc.appendChild(document.createTextNode(obj.location.locality))

      divTitle.appendChild(h3RestaurantName)
      // divTitle.appendChild(smallLoc)

      const imgRestaurant = document.createElement('img')
      imgRestaurant.src = obj.featured_image
      imgRestaurant.width = '50%'
      imgRestaurant.height = '50%'

      const pRestaurantDescription = document.createElement('p')
      pRestaurantDescription.classList.add('mb-1')
      const sampleText = `Restaurant Description.`
      pRestaurantDescription.appendChild(document.createTextNode(sampleText))

      mainA.appendChild(divTitle)
      mainA.appendChild(imgRestaurant)
      mainA.appendChild(pRestaurantDescription)

      document.getElementById('restaurants').appendChild(mainA)
    },
    getCuisineTypes() {
      restaurantService.getCuisines().then((res) => {
        const cuisineTypes = res.cuisines
        console.log(cuisineTypes)
        for (let i = 0; i < cuisineTypes.length; i++) {
          const checkboxCuisine = document.createElement('input')
          checkboxCuisine.type = 'checkbox'
          checkboxCuisine.value = cuisineTypes[i].cuisine.cuisine_name

          const spanText = document.createElement('span')
          spanText.appendChild(
            document.createTextNode(cuisineTypes[i].cuisine.cuisine_name)
          )

          document.getElementById('cuisineTypes').appendChild(checkboxCuisine)
          document.getElementById('cuisineTypes').appendChild(spanText)
          document
            .getElementById('cuisineTypes')
            .appendChild(document.createElement('BR'))
        }
      })
    },
  },
}
</script>
<style scoped>
.navbar-custom {
  background-color: white;
}
</style>
