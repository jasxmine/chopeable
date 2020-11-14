<template>
  <div id="admin">
    <VisualizeTable />
  </div>
</template>

<script>
import VisualizeTable from '../components/VisualizeTable'

export default {
  name: 'Admin',
  components: {
    VisualizeTable,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
