<template>
  <div>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <div
      style="
        padding-top: 10px;
        position: fixed;
        background-color: white;
        width: 100%;
        z-index: 5;
      "
    >
      <!-- Load Vue followed by BootstrapVueIcons -->
      <script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
      <link
        type="text/css"
        rel="stylesheet"
        href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
      />
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
      <div>
        <form>
          <div class="form-row">
            <a href="/app">
              <img
                src="../logo_2.png"
                alt="why is this taking so long"
                style="margin-left: 20px"
                width="200"
              />
            </a>
          </div>
        </form>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style="margin-bottom: 0px"
        >
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NuxtLink class="nav-link" to="/dashboard">
                  Dashboard
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/calendar"> Calendar </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {}
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
</style>
