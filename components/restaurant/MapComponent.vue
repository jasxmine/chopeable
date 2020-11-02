<template>
  <div class="vue-map-container">
    <div class="vue-map" style="position: relative; overflow: hidden">
      <GmapMap
        :center="{ lat: latitude, lng: longitude }"
        :zoom="15"
        style="width: 80%; height: 250px"
      >
        <GmapMarker
          :position="google && new google.maps.LatLng(latitude, longitude)"
          :clickable="true"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'MapComponent',
  props: ['latitude', 'longitude'],
  computed: {
    google: gmapApi,
  },
}
</script>

<style scoped>
.vue-map-container .vue-map {
  width: 100%;
  height: 100%;
}
</style>
