<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-row no-gutters style="height: 50px"> </v-row>
        </v-container>
        <div>
          <Counter />
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Counter from '@/components/Counter'

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

<style scoped>
.box {
  justify-content: center;
}
</style>
