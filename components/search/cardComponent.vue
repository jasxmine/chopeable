<template>
  <a
    :href="obj.url.slice(33, obj.url.indexOf('?'))"
    style="text-decoration: none; color: black"
  >
    <div class="card">
      <div class="card-horizontal">
        <div class="img-square-wrapper">
          <img
            class=""
            :src="obj.featured_image"
            alt="Card image cap"
            width="300"
            height="180"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">{{ obj.name }}</h4>
          <p class="card-text">
            Address: {{ obj.location.address }}
            <br />
            Cuisine Type: {{ obj.cuisines }}
            <br />
            Opening Times: {{ obj.timings }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['obj'],
}
</script>

<style scoped>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
</style>
