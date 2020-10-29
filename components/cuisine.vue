<template>
  <div class="row mx-auto" style="width: 90%">
    <div
      v-for="a_cuisine in cuisine"
      :key="a_cuisine.id"
      class="centerize col-md-4"
    >
      <a :href="'/search?cuisine=' + a_cuisine.cuisine_name">
        <div class="card mb-4">
          <div>
            <img
              :src="a_cuisine.url"
              alt="why though"
              width="100%"
              height="300px"
            />
            <div class="bottom-left">{{ a_cuisine.cuisine_name }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: white;
  font-size: 40px;
}
img:hover {
  opacity: 0.7;
}
</style>

<script>
export default {
  name: 'Cuisine',
  props: ['cuisine'],
}
</script>
