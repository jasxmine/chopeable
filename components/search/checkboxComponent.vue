<template>
  <form id="cuisineTypes">
    <div v-for="item in first8" :key="item.id">
      <input type="checkbox" :value="item.cuisine_name" />
      <span> {{ item.cuisine.cuisine_name }} </span>
    </div>
    <div id="more">
      <div v-for="item in other" :key="item.id">
        <input type="checkbox" :value="item.cuisine_name" />
        <span> {{ item.cuisine.cuisine_name }} </span>
      </div>
    </div>
    <button id="moreButton" type="button" @click="seeMore()">See Mo re</button>
  </form>
</template>

<script>
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
