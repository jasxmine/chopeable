<template>
  <div @click.self="emptyFocusOut" @mouseover.self="canScroll">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <div
      style="padding-top: 10px; width: 100%; z-index: 1"
      @mouseover.self="canScroll"
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>

      <div @click.self="emptyFocusOut" @mouseover.self="canScroll">
        <form @click.self="emptyFocusOut" @mouseover.self="canScroll">
          <div
            class="form-row"
            @click.self="emptyFocusOut"
            @mouseover.self="canScroll"
          >
            <a href="/app">
              <img
                src="../logo_2.png"
                alt="why is this taking so long"
                style="margin-left: 20px"
                width="200"
              />
            </a>
            <span style="margin-left: 150px"></span>
            <div
              style="width: 300px"
              @click.self="emptyFocusOut"
              @mouseover.self="canScroll"
            >
              <div
                id="parenting"
                class="form-group has-search"
                style="margin-top: 10px"
                @click.self="emptyFocusOut"
                @mouseover.self="canScroll"
              >
                <input
                  id="search_restaurant"
                  list="restaurants"
                  type="text"
                  class="form-control randomizedClick"
                  placeholder="Search"
                  autocomplete="off"
                  style="
                    height: 45px;
                    width: 300%;
                    font-size: 18px;
                    line-height: 40px;
                  "
                  @keyup="getUser"
                  @focus="getUser"
                />
                <div
                  id="displaySearch"
                  style="
                    position: absolute;
                    width: 750px;
                    background-color: rgb(255, 255, 255, 1);
                    display: none;
                    z-index: 5;
                    max-height: 300px;
                    overflow: scroll;
                  "
                  @mouseover="cannotScroll"
                >
                  <search :search="searchResult" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <nav
          class="navbar navbar-expand-md navbar-light"
          style="margin-bottom: 0px; margin-top: 15px"
          @click="emptyFocusOut"
          @mouseover="canScroll"
        >
          <div class="text-center" style="width: 100%">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <NuxtLink class="nav-link" to="/search">
                    Restaurant Directory
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" to="/visualiseTables">
                    Visualise Tables
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

a:hover {
  background-color: rgb(240, 240, 240, 0.5);
}
</style>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import search from '../components/search'
window.axios = require('axios')
export default {
  components: {
    search,
  },
  data() {
    return {
      searchResult: [],
      msg: 'hello',
      isModalVisible: 'false',
      isHovering: false,
    }
  },
  methods: {
    async getUser() {
      this.searchResult = []
      document.getElementById('displaySearch').style.display = 'block'
      const search = document.getElementById('search_restaurant').value
      if (search.length > 2) {
        try {
          const response = await axios.get(
            'https://developers.zomato.com/api/v2.1/search?q=' +
              search +
              '&apikey=e5567dabfe03e800b9c322a7c552684d'
          )
          console.log(response.data.restaurants)
          for (let restaurant of response.data.restaurants) {
            let restaurantObj = { name: '', location: '' }
            let name = restaurant.restaurant.name
            let locality = '(' + restaurant.restaurant.location.locality + ')'
            let imageUrl = restaurant.restaurant.featured_image
            let restaurantUrl = restaurant.restaurant.url
            let index_question = restaurantUrl.indexOf('?')
            let restaurant_cuisine = restaurant.restaurant.cuisines
            restaurantUrl = restaurantUrl.slice(33, index_question)
            if (imageUrl == '') {
              imageUrl = '/logo_photo.jpg'
            }
            restaurantObj.name = name
            restaurantObj.location = locality
            restaurantObj.imageUrl = imageUrl
            restaurantObj.restaurantUrl = restaurantUrl
            restaurantObj.cuisines = restaurant_cuisine
            restaurantObj.styling = 'border-top: 1px solid black; clear: left;'
            this.searchResult.push(restaurantObj)
          }
          this.searchResult[0].styling = 'clear: left'
        } catch (error) {
          console.error(error)
        }
      } else {
        document.getElementById('displaySearch').style.display = 'none'
      }
    },
    emptyFocusOut() {
      console.log('empty function called')
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
  },
}
</script>
