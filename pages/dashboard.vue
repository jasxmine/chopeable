<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-row no-gutters style="height: 100px"> </v-row>
        </v-container>
        <v-row>
          <v-col cols="8">
            <Counter />
          </v-col>
          <v-col cols="4">
            <ToDo />
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import ToDo from '../components/ToDo.vue'

export default {
  name: 'Admin',
  components: {
    Counter,
    ToDo,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
}
</script>
