<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-row no-gutters style="height: 50px"> </v-row>
        </v-container>

        <div class="d-flex justify-content-center" style="width: 100%">
          <div
            id="box 2"
            style="float: left; width: 70%; border: 1px solid #000"
          >
            <div class="box" style="padding: 10px; position: relative">
              <line-chart></line-chart>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>

        <div class="d-flex justify-content-center" style="width: 100%">
          <div id="box 2" style="float: left; width: 60%">
            <div class="box" style="padding: 10px; position: relative">
              <Counter />
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import Counter from '../components/Counter.vue'

export default {
  name: 'Admin',
  components: {
    Counter,
    LineChart,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
}
</script>

<style scoped>
.box {
  justify-content: center;
}
</style>
