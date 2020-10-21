<template>
  <div>
    <div v-for="a_cuisine in cuisine" :key="a_cuisine.id" class="centerize">
      <div class="col-md-4">
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
      </div>
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
.centerize {
  margin-left: 5%;
  margin-right: 5%;
}
</style>

<script>
export default {
  name: 'Cuisine',
  props: ['cuisine'],
}
</script>
