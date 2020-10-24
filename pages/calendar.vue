<template>
  <div>
    <v-app>
      <v-content>
        <Calendar />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Admin',
  components: {
    Calendar,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
}
</script>
