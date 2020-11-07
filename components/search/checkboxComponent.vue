<template>
  <form id="cuisineTypes" class="container-fluid" @change="$emit('search')">
    <h4>Location</h4>
    <input id="location" type="text" style="display: block" />
    <h4>Cuisine</h4>
    <div v-for="item in first8" :key="item.id">
      <input type="checkbox" :value="item.cuisine.cuisine_id" />
      <span> {{ item.cuisine.cuisine_name }} </span>
    </div>
    <div id="more">
      <div v-for="item in other" :key="item.id">
        <input type="checkbox" :value="item.cuisine.cuisine_id" />
        <span> {{ item.cuisine.cuisine_name }} </span>
      </div>
    </div>
    <button id="moreButton" type="button" @click="seeMore()">See More</button>
  </form>
</template>

<script>
// import restaurantService from '../../services/restaurantService'

export default {
  name: 'CheckboxComponent',
  props: ['first8', 'other'],
  methods: {
    seeMore() {
      const moreText = document.getElementById('more')
      const btnText = document.getElementById('moreButton')

      if (moreText.style.display === 'none') {
        btnText.innerHTML = 'See Less'
        moreText.style.display = 'block'
        console.log('1st click')
      } else {
        btnText.innerHTML = 'See More'
        moreText.style.display = 'none'
      }
    },
  },
}
</script>

<style scoped>
#more {
  display: none;
}
</style>
