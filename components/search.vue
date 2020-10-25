<template>
  <div>
    <div
      v-for="searchRes in search"
      :key="searchRes.id"
      :style="searchRes.styling"
    >
      <a
        :href="'/' + searchRes.restaurantUrl"
        class="green_text"
        style="background-color: yellow"
      >
        <div>
          <div
            style="
              height: 50px;
              width: 50px;
              display: inline-block;
              float: left;
            "
            class="spacing"
          >
            <img
              :src="searchRes.imageUrl"
              style="width: 100%; height: 100%"
              alt="??"
            />
          </div>
          <div style="float: left; margin-top: 7px">
            <div>{{ searchRes.name }} {{ searchRes.location }}</div>
            <div>
              {{ searchRes.cuisines }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['search'],
}
</script>

<style>
.spacing {
  margin-top: 2px;
  margin-bottom: 2px;
}
.green_text:hover {
  text-decoration: underline;
  color: orange;
}
</style>
