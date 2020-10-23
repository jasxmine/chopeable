<template>
  <v-app>
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from '../components/Calendar'

export default {
  path: '../layout/admin.vue',
  name: 'Admin',
  layout: 'admin',
  meta: { template: 'admin' },
  components: {
    Calendar,
  },
  data: () => ({
    //
  }),
}
</script>
