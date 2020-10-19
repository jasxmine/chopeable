<template>
  <div>
    <div class="header">
      <br /><br /><br /><br /><br />
      <br />
      <br />
    </div>

    <div class="row" style="justify-content: flex-end">
      <div class="col-auto" style="width: 100%">
        <b-table responsive striped hover :items="items"></b-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  path: '../layout/admin.vue',
  name: 'Admin',
  layout: 'admin',
  meta: { template: 'admin' },
  data() {
    return {
      items: [
        {
          booking_time: '12:30',
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          email: 'abc@gmail.com',
          mobile: '654321',
          reward: '50',
          membership: 'yes',
        },
        {
          booking_time: '15:30',
          first_name: 'Larsen',
          last_name: 'Shaw',
          email: 'abc@gmail.com',
          mobile: '654321',
          reward: '40',
          membership: 'yes',
        },
        {
          booking_time: '16:30',
          first_name: 'Geneva',
          last_name: 'Wilson',
          email: 'abc@gmail.com',
          mobile: '654321',
          reward: '10',
          membership: 'No',
        },
        {
          booking_time: '17:00',
          first_name: 'Bob',
          last_name: 'Carney',
          email: 'abc@gmail.com',
          mobile: '654321',
          reward: '60',
          membership: 'No',
        },
      ],
    }
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
