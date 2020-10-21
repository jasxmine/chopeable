<template>
  <div>
    <div v-for="searchRes in search" :key="searchRes.id">
      <div style="height: 50px; width: 50px; display: inline-block">
        <img
          :src="searchRes.imageUrl"
          style="width: 100%; height: 100%"
          alt="??"
        />
      </div>

      <a href="youtube.com"> {{ searchRes.name }} {{ searchRes.location }} </a>
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
div {
  border: 1px black;
}
</style>
