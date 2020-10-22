<template>
  <h1>{{ restaurant }}</h1>
</template>

<script>
export default {
  data() {
    return {
      restaurant: '',
    }
  },
  mounted() {
    this.restaurant = this.$route.path.substring(1)
  },
}
</script>
