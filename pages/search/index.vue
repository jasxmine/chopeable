<template>
  <div class="container-fluid" @click="emptyFocusOut" @mouseover="canScroll">
    <div class="row">
      <div
        id="filter option"
        class="col-sm-3 card container-fluid"
        style="border-top: 0px; border-radius: 0px"
      >
        <div class="card-body">
          <h1 class="card-title">Filter</h1>
          <div id="cuisineTypes" @change="search()">
            <article class="card-group-item">
              <header class="card-header">
                <h6 style="font-size: 15px">Establishment</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <select v-model="estb" class="form-control">
                    <option value="">None</option>
                    <option
                      v-for="object in establishmentArr"
                      :key="object.id"
                      :value="object.establishment.id"
                    >
                      {{ object.establishment.name }}
                    </option>
                  </select>
                </div>
                <!-- card-body.// -->
              </div>
            </article>
            <article class="card-group-item">
              <header class="card-header">
                <h6 style="font-size: 15px">Cuisine</h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <form id="cuisine">
                    <div v-for="item in cType.slice(0, 8)" :key="A + item.id">
                      <input
                        :id="item.cuisine.cuisine_id"
                        v-model="checkedCuisines"
                        type="checkbox"
                        :value="item.cuisine.cuisine_id"
                      />
                      <label> {{ item.cuisine.cuisine_name }} </label>
                    </div>
                    <div id="more">
                      <div v-for="item in cType.slice(8)" :key="B + item.id">
                        <input
                          :id="item.cuisine.cuisine_id"
                          v-model="checkedCuisines"
                          type="checkbox"
                          :value="item.cuisine.cuisine_id"
                        />
                        <label> {{ item.cuisine.cuisine_name }} </label>
                      </div>
                    </div>
                    <button id="moreButton" type="button" @click="seeMore()">
                      See More
                    </button>
                  </form>
                </div>
                <!-- card-body.// -->
              </div>
            </article>
          </div>
          <br />
        </div>
      </div>
      <div id="item" class="col-sm-9">
        <div id="restaurants" class="list-group container-fluid">
          <cardComponent
            v-for="restaurant in allRestaurants"
            :key="C + restaurant.id"
            :obj="restaurant"
          >
          </cardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardComponent from '../../components/search/CardComponent'
import restaurantService from '../../services/restaurantService'

window.axios = require('axios')

export default {
  components: { cardComponent },
  data() {
    return {
      allRestaurants: [],
      cType: [],
      checkboxId: 0,
      checkedCuisines: [],
      estb: '',
      establishmentArr: [],
      estbDict: {},
    }
  },
  mounted() {
    this.readURL()
    restaurantService.getEstablishments().then((res) => {
      this.establishmentArr = res.establishments
      for (let i = 0; i < res.establishments.length; i++) {
        const item = res.establishments[i].establishment
        this.estbDict[item.id] = item.name
      }
    })
    restaurantService.getCuisines().then((res) => {
      const cuisineArr = JSON.parse(JSON.stringify(res))
      for (let i = 0; i < cuisineArr.cuisines.length; i++) {
        const toAdd = JSON.parse(JSON.stringify(cuisineArr.cuisines[i]))
        this.cType.push(toAdd)
      }
    })
    this.observerError(this.cType)
    if (this.checkedCuisines.length > 0) {
      this.allRestaurants = []
      this.search()
    } else {
      restaurantService.getRestaurants().then((res) => {
        const restaurantsArr = res.restaurants
        for (let i = 0; i < restaurantsArr.length; i++) {
          const toAdd = restaurantsArr[i].restaurant
          if (toAdd.featured_image === '') {
            toAdd.featured_image = '/logo_photo.jpg'
          }
          this.allRestaurants.push(toAdd)
        }
      })
    }
  },
  methods: {
    observerError(arr) {
      arr = JSON.parse(JSON.stringify(arr))
      for (let i = 0; i < arr.length; i++) {
        arr[i] = JSON.parse(JSON.stringify(arr[i]))
      }
    },
    search() {
      this.allRestaurants = []
      if (this.checkedCuisines === []) {
        restaurantService.getRestaurantsEstablishment(this.estb).then((res) => {
          const restaurantsArr = res.restaurants
          // console.log(restaurantsArr)
          for (let i = 0; i < restaurantsArr.length; i++) {
            const toAdd = restaurantsArr[i].restaurant
            if (toAdd.featured_image === '') {
              toAdd.featured_image = '/logo_photo.jpg'
            }
            this.allRestaurants.push(toAdd)
          }
        })
      } else {
        restaurantService
          .getRestaurantsCuisines(this.checkedCuisines)
          .then((res) => {
            const restaurantsArr = res.restaurants
            // console.log(restaurantsArr)
            for (let i = 0; i < restaurantsArr.length; i++) {
              const toAdd = restaurantsArr[i].restaurant
              if (toAdd.featured_image === '') {
                toAdd.featured_image = '/logo_photo.jpg'
              }
              if (
                toAdd.establishment[0] === this.estbDict[this.estb] ||
                this.estb === ''
              ) {
                this.allRestaurants.push(toAdd)
              }
            }
          })
      }
      this.noImage(this.allRestaurants)
    },
    seeMore() {
      const moreText = document.getElementById('more')
      const btnText = document.getElementById('moreButton')

      if (moreText.style.display === 'none') {
        btnText.innerHTML = 'See Less'
        moreText.style.display = 'block'
      } else {
        btnText.innerHTML = 'See More'
        moreText.style.display = 'none'
      }
    },
    noImage(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr.featured_image === '') {
          arr.featured_image = '/logo_photo.jpg'
        }
      }
    },
    readURL() {
      const url = window.location.search
      let cuisine = ''
      if (url !== '') {
        this.checkedCuisines = []
        cuisine = url.slice(url.indexOf('=') + 1, url.length)
        this.checkedCuisines.push(cuisine)
      }
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
#more {
  display: none;
}
</style>
