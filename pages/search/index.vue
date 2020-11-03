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
          <form id="cuisineTypes"></form>
          <br />
          <button type="button" class="btn btn-warning">Search</button>
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
            <!-- <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div> -->
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
import restaurantService from '../../services/restaurantService'

window.axios = require('axios')

export default {
  components: { cardComponent },
  data() {
    return {
      allRestaurants: [],
    }
  },
  mounted() {
    // this.getAlpha()
    this.getCuisineTypes()
    restaurantService.getRestaurants().then((res) => {
      const restaurantsArr = res.restaurants
      for (let i = 0; i < restaurantsArr.length; i++) {
        const toAdd = restaurantsArr[i].restaurant
        if (toAdd.featured_image === '') {
          toAdd.featured_image = '/logo_photo.jpg'
        }
        this.allRestaurants.push(toAdd)
        console.log(toAdd)
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
    // generateCards(obj) {
    //   const mainLink = document.createElement('a')
    //   mainLink.href = '#'
    //   mainLink.style.textDecoration = 'none'
    //   mainLink.style.color = 'black'
    //   const mainCard = document.createElement('div')
    //   mainCard.classList.add('card')
    //   const cardHorizontal = document.createElement('div')
    //   cardHorizontal.classList.add('card-horizontal')
    //   const cardImg = document.createElement('div')
    //   cardImg.classList.add('img-square-wrapper')
    //   const imgRestaurant = document.createElement('img')
    //   imgRestaurant.src = obj.featured_image
    //   imgRestaurant.width = '300'
    //   imgRestaurant.height = '180'
    //   cardImg.appendChild(imgRestaurant)
    //   const cardBody = document.createElement('div')
    //   cardBody.classList.add('card-body')
    //   const restaurantTitle = document.createElement('h4')
    //   restaurantTitle.classList.add('card-title')
    //   restaurantTitle.appendChild(document.createTextNode(obj.name))
    //   const descriptionString = `
    //   Address: ${obj.location.adress}
    //   Cuisines: ${obj.cuisines}
    //   Timings: ${obj.timings}
    //   `
    //   const restaurantDescription = document.createElement('p')
    //   restaurantDescription.classList.add('card-text')
    //   restaurantDescription.appendChild(
    //     document.createTextNode(descriptionString)
    //   )
    //   cardBody.appendChild(restaurantTitle)
    //   cardBody.appendChild(restaurantDescription)
    //   cardHorizontal.appendChild(cardImg)
    //   cardHorizontal.appendChild(cardBody)
    //   mainCard.appendChild(cardHorizontal)
    //   mainLink.appendChild(mainCard)
    //   document.getElementById('restaurants').appendChild(mainLink)

    //   // document.getElementById('restaurants').innerHTML += `
    //   // <div class="card">
    //   //       <div class="card-horizontal">
    //   //         <div class="img-square-wrapper">
    //   //           <img
    //   //             class=""
    //   //             src="${obj.featured_image}"
    //   //             alt="Card image cap"
    //   //             width= 300
    //   //             height= 180
    //   //           />
    //   //         </div>
    //   //         <div class="card-body">
    //   //           <h4 class="card-title">${obj.name}</h4>
    //   //           <p class="card-text">
    //   //             Address: ${obj.location.address}
    //   //             Cuisines: ${obj.cuisines}
    //   //             Timings: ${obj.timings}
    //   //           </p>
    //   //         </div>
    //   //       </div>
    //   //     </div>
    //   // `
    // },
    getCuisineTypes() {
      restaurantService.getCuisines().then((res) => {
        let i = 0
        const cuisineTypes = res.cuisines
        // console.log(cuisineTypes)
        for (i; i < 8; i++) {
          const checkboxCuisine = document.createElement('input')
          checkboxCuisine.type = 'checkbox'
          checkboxCuisine.value = cuisineTypes[i].cuisine.cuisine_name

          const spanText = document.createElement('span')
          spanText.appendChild(
            document.createTextNode(' ' + cuisineTypes[i].cuisine.cuisine_name)
          )

          document.getElementById('cuisineTypes').appendChild(checkboxCuisine)
          document.getElementById('cuisineTypes').appendChild(spanText)
          document
            .getElementById('cuisineTypes')
            .appendChild(document.createElement('BR'))
        }
        const dotSpan = document.createElement('span')
        dotSpan.id = 'dots'
        dotSpan.appendChild(document.createTextNode('...'))
        const seeMoreSpan = document.createElement('div')
        seeMoreSpan.id = 'more'
        seeMoreSpan.style.display = 'none'
        const seeMoreButton = document.createElement('button')
        seeMoreButton.onclick = 'this.seeMore'
        seeMoreButton.type = 'button'
        seeMoreButton.classList.add('button')
        seeMoreButton.width = '77.48'
        seeMoreButton.height = '33.33'

        document.getElementById('cuisineTypes').appendChild(dotSpan)
        document
          .getElementById('cuisineTypes')
          .appendChild(document.createElement('BR'))
        document.getElementById('cuisineTypes').appendChild(seeMoreSpan)
        document
          .getElementById('cuisineTypes')
          .appendChild(document.createElement('BR'))
        console.log(seeMoreButton)
        document.getElementById('cuisineTypes').appendChild(seeMoreButton)

        for (i; i < cuisineTypes.length; i++) {
          const checkboxCuisine = document.createElement('input')
          checkboxCuisine.type = 'checkbox'
          checkboxCuisine.value = cuisineTypes[i].cuisine.cuisine_name

          const spanText = document.createElement('span')
          spanText.appendChild(
            document.createTextNode(' ' + cuisineTypes[i].cuisine.cuisine_name)
          )
          document.getElementById('more').appendChild(checkboxCuisine)
          document.getElementById('more').appendChild(spanText)
          document
            .getElementById('more')
            .appendChild(document.createElement('BR'))
        }
      })
    },
    seeMore() {
      const dots = document.getElementById('dots')
      const moreText = document.getElementById('more')
      const btnText = document.getElementById('myBtn')

      if (dots.style.display === 'none') {
        dots.style.display = 'inline'
        btnText.innerHTML = 'Read more'
        moreText.style.display = 'none'
      } else {
        dots.style.display = 'none'
        btnText.innerHTML = 'Read less'
        moreText.style.display = 'inline'
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
