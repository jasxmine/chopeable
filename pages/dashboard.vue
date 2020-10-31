<template>
  <div>
    <v-app>
      <v-content>
        <Counter />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'

export default {
  name: 'Admin',
  components: {
    Counter,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
}
</script>
