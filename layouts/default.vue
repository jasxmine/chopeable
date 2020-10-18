<template>
  <div>
    <div
      style="
        padding-top: 10px;
        position: fixed;
        background-color: white;
        width: 100%;
      "
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
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
            <span style="margin-left: 150px"></span>
            <div class="form-group has-search" style="margin-top: 10px">
              <span
                class="fa fa-search form-control-feedback bg-light"
                style="margin-top: 6px"
              ></span>
              <input
                type="text"
                class="form-control bg-light"
                placeholder="Search"
                style="
                  height: 45px;
                  border: 0px;
                  width: 750px;
                  font-size: 18px;
                  line-height: 40px;
                "
                @click="
                  {
                    {
                      created()
                    }
                  }
                "
              />
            </div>
          </div>
        </form>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"> Restaurant Directory </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown (if ever needed)
                </a>
              </li>
            </ul>
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
</style>

<script>
export default {
  methods: {
    created() {
      const request = new XMLHttpRequest()
      request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
          const parsed = JSON.parse(this.responseText)
          console.log(parsed)
        }
      }
      request.open(
        'GET',
        'https://tih-api.stb.gov.sg/content/v1/food-beverages/search?keyword=c&apikey=V9RImjwjM4y4T2GFlnwjdMJuIs3NoHV1',
        true
      )
      request.send()
    },
  },
}
</script>
