<template>
  <div>
    <div v-for="searchRes in search" :key="searchRes.id">
      <a href="youtube.com"> {{ searchRes.name }} {{ searchRes.location }} </a>
      <hr />
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
