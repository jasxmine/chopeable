<template>
  <div @mouseover.self="canScroll">
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

      <div @mouseover.self="canScroll">
        <form @mouseover.self="canScroll">
          <div class="form-row" @mouseover.self="canScroll">
            <a href="/app">
              <img
                src="../logo_2.png"
                alt="why is this taking so long"
                style="margin-left: 20px"
                width="200"
              />
            </a>
            <span style="margin-left: 150px"></span>
            <div style="width: 300px" @mouseover.self="canScroll"></div>
          </div>
        </form>
        <nav
          class="navbar navbar-expand-md navbar-light"
          style="margin-bottom: 0px; margin-top: 15px"
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
                  <NuxtLink class="nav-link" to="/dashboard">
                    Dashboard
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink class="nav-link" to="/calendar">
                    Calendar
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
<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  methods: {
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

<style>
/*-------------------------
    The menu
--------------------------*/

nav {
  display: inline-block;
  margin: 60px auto 45px;
  background-color: #ffb607;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 18px 200px;
  color: black !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

li {
  margin-left: 20px;
  margin-right: 20px;
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
