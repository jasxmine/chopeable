<!-- Sign up functionality, profile page, add margin-top to "Google sign in" button -->
<template>
  <div @click.self="emptyFocusOut" @mouseover.self="canScroll">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="google-signin-client_id"
      content="766630512827-mne39835j3j9cot1ql9j8rfc02qg0i6u.apps.googleusercontent.com"
    />
    <meta name="google-signin-scope" content="profile email" />

    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <div
      style="padding-top: 10px; width: 100%; z-index: 1"
      @mouseover.self="canScroll"
    >
      <div @click.self="emptyFocusOut" @mouseover.self="canScroll">
        <div
          class="row"
          @click.self="emptyFocusOut"
          @mouseover.self="canScroll"
        >
          <div
            class="col-2"
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
          </div>
          <div
            class="col-1"
            @click.self="emptyFocusOut"
            @mouseover.self="canScroll"
          ></div>
          <div
            class="col-6"
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
                  width: 100%;
                  font-size: 18px;
                  line-height: 40px;
                "
                @keyup="getUser"
                @focus="getUser"
              />
              <div class="row" style="margin-left: 0.3px">
                <div
                  id="displaySearch"
                  style="
                    position: absolute;
                    background-color: rgb(255, 255, 255, 1);
                    display: none;
                    z-index: 5;
                    max-height: 300px;
                    overflow: scroll;
                  "
                  class="col-12"
                  @mouseover="cannotScroll"
                >
                  <search :search="searchResult" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-1"
            @click.self="emptyFocusOut"
            @mouseover.self="canScroll"
          ></div>
          <div
            class="col-2"
            @click.self="emptyFocusOut"
            @mouseover.self="canScroll"
          >
            <div v-if="!user" style="margin-top: 10px">
              <b-dropdown
                id="dropdown-form"
                ref="dropdown"
                text="Login"
                class="m-2"
                variant="warning"
                size="lg"
                right
              >
                <b-dropdown-form style="margin-top: 10px">
                  <b-form-group>
                    <GoogleLogin
                      :params="params"
                      :render-params="renderParams"
                      :on-success="onSuccess"
                      data-theme="dark"
                    ></GoogleLogin>
                  </b-form-group>
                  <hr class="hr-text" data-content="OR" />

                  <b-form-group
                    label-for="dropdown-form-email"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      v-model="inputEmail"
                      size="sm"
                      placeholder="Email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label-for="dropdown-form-password">
                    <b-form-input
                      id="dropdown-form-password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-button
                      variant="warning"
                      size="sm"
                      style="width: 100%"
                      @click="login()"
                      >Login</b-button
                    >
                  </b-form-group>
                  <hr class="hr-text" data-content="OR" />
                </b-dropdown-form>
                <!-- SIGN UP FORM -->
                <div style="color: grey; text-align: center">
                  Sign up with us:
                </div>
                <b-dropdown-form style="margin-top: 10px">
                  <b-form-group
                    label-for="dropdown-form-name"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-name"
                      v-model="inputNameSignUp"
                      size="sm"
                      placeholder="Name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-for="dropdown-form-email"
                    style="width: 250px"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      v-model="inputEmailSignUp"
                      size="sm"
                      placeholder="Email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label-for="dropdown-form-password">
                    <b-form-input
                      id="dropdown-form-password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-button
                      variant="warning"
                      size="sm"
                      style="width: 100%"
                      @click="signUp()"
                      >Sign Up</b-button
                    >
                  </b-form-group>
                </b-dropdown-form>
              </b-dropdown>
            </div>
            <div v-else style="margin-top: 20px">
              <div class="dropdown" right>
                <a
                  :href="'/profile'"
                  style="
                    color: black;
                    text-decoration: none;
                    background-color: white;
                  "
                >
                  <img :src="image" width="40" />
                  Hi, {{ user.name }}!
                </a>
                <button
                  id="dropdownMenuButton"
                  class="btn btn-warning dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="border-radius: 50%"
                ></button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <nuxt-link to="/profile" class="dropdown-item">
                    My Profile
                  </nuxt-link>
                  <a
                    class="dropdown-item"
                    href="/app"
                    @click="signOut(), logout()"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-md navbar-light"
          style="margin-bottom: 0px; margin-top: 15px; background-color: orange"
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
                  <a class="nav-link" href="/search"> Restaurant Directory </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <nuxt />
    <theFooter v-if="loadFooter" />
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
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text::after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;

  padding: 0 0.5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}
.hr-text::before {
  content: '';
  background: #818078;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
html {
  width: 100vw;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
}
#dropdownMenuButton:focus {
  outline: 0;
  border: 0;
}
</style>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import search from '../components/search'
import theFooter from '../components/theFooter'
import { db } from '@/main'
import GoogleLogin from 'vue-google-login'

window.axios = require('axios')
export default {
  components: {
    search,
    theFooter,
    GoogleLogin,
  },
  data() {
    return {
      searchResult: [],
      msg: 'hello',
      isModalVisible: 'false',
      isHovering: false,
      loadFooter: true,
      inputEmail: '',
      inputPassword: '',
      inputNameSignUp: '',
      inputEmailSignUp: '',
      isLoggedIn: false,
      user: false,
      unregisteredEmail: false,
      params: {
        client_id:
          '766630512827-mne39835j3j9cot1ql9j8rfc02qg0i6u.apps.googleusercontent.com',
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
      image: '',
    }
  },
  created() {
    if (localStorage.user == 0) {
    } else {
      this.inputEmail = localStorage.user
      this.image = localStorage.image
      this.name = localStorage.name
      this.login()
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
          for (let restaurant of response.data.restaurants) {
            let restaurantObj = { name: '', location: '' }

            //restaurant name
            let name = restaurant.restaurant.name

            //restaurant locality
            let locality = '(' + restaurant.restaurant.location.locality + ')'

            //restaurant image
            let imageUrl = restaurant.restaurant.featured_image

            //link to restaurant's page
            let restaurantUrl = restaurant.restaurant.url
            let index_question = restaurantUrl.indexOf('?')
            let restaurant_cuisine = restaurant.restaurant.cuisines
            restaurantUrl = restaurantUrl.slice(33, index_question)

            //if zomato api restaurant doesn't have any imageUrl, it will be set to our logo photo
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
      //onclick, this function will close the search bar
      this.searchResult = []
      document.getElementById('displaySearch').style.display = 'none'
    },
    canScroll() {
      //this makes the whole page scrollable
      document.documentElement.style.position = 'static'
      document.documentElement.style['overflow-y'] = 'auto'
      document.documentElement.style['overflow-x'] = 'hidden'
    },
    cannotScroll() {
      //this makes the whole page unscrollable (so that only the search div is scrollable)
      document.documentElement.style.position = 'fixed'
      document.documentElement.style['overflow-y'] = 'scroll'
      document.documentElement.style['overflow-x'] = 'hidden'
    },
    async login() {
      if (this.inputEmail) {
        let email = this.inputEmail
        const userListGet = await db.collection('user').get()
        let userList = []
        userListGet.forEach((doc) => {
          const userData = doc.data()
          userList.push(userData)
        })
        for (let userElement of userList) {
          userElement.email = userElement.email.trim()
          if (this.inputEmail == userElement.email) {
            this.isLoggedIn = true
            this.user = userElement
            localStorage.user = this.user.email
            localStorage.name = this.user.name
            localStorage.credits = this.user.credits
            if (!localStorage.image) {
              localStorage.image = '/profilePicture.jpg'
              this.image = localStorage.image
            }
          }
        }
        //if the email doesn't exist
        if (this.isLoggedIn == false) {
          this.inputEmail = ''
          this.logout()
          this.signOut()
          alert('Your email does not exist in our database :(')
        }
        //input validation
      } else {
        alert('Both login email and password field cannot be empty!')
      }
    },
    logout() {
      this.user = false
      localStorage.user = 0
      localStorage.name = 0
      localStorage.image = ''
      localStorage.credits = 0
    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {})
    },

    async onSuccess(googleUser) {
      // This only gets the user information: id, name, imageUrl and email
      const profile = googleUser.getBasicProfile()
      this.inputEmail = profile.getEmail()
      let name = profile.getName()
      this.image = profile.getImageUrl()
      localStorage.image = this.image
      this.login()
    },
    async signUp() {
      if (this.inputNameSignUp && this.inputEmailSignUp) {
        await db.collection('user').add({
          name: this.inputNameSignUp,
          email: this.inputEmailSignUp,
          credits: 100,
        })
        this.inputEmail = this.inputEmailSignUp
        this.login()
        this.inputNameSignUp = ''
        this.inputEmailSignUp = ''
      } else {
        alert('Sign up email, name, and password text field cannot be empty!')
      }
    },
  },
}
</script>
