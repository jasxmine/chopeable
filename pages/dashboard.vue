<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-row no-gutters style="height: 50px"> </v-row>
        </v-container>

        <b-row>
          <b-col cols="7">
            <div>
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
          </b-col>
          <b-col cols="5">
            <div class="column">
              <DoughnutChart
                :percent="percent"
                :visible-value="true"
                foreground-color="green"
                background-color="#d3fde2"
                :stroke-width="20"
                :custom-text="'No. of Customers <br/>'"
              />
            </div>
          </b-col>
        </b-row>

        <br />

        <b-row>
          <b-col>
            <line-chart></line-chart>
          </b-col>
        </b-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import DoughnutChart from '@/components/DoughnutChart'
export default {
  name: 'Admin',
  components: {
    LineChart,
    DoughnutChart,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: { template: 'admin' },
  data() {
    return {
      percent: '25',
      fields: [
        {
          key: 'booking_time',
          label: 'Booking Time',
          sortable: true,
          variant: 'primary',
        },

        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'pax',
          sortable: true,
        },
      ],
      items: [
        {
          isActive: true,
          booking_time: '10:00',
          name: 'Tim',
          pax: 5,
        },
        {
          isActive: false,
          booking_time: '15:30',
          name: 'Larsen',
          pax: 4,
        },
        {
          isActive: false,
          booking_time: '16:00',
          name: 'Geneva',
          pax: 3,
        },
        {
          isActive: true,
          booking_time: '12:00',
          name: 'Kate',
          pax: 2,
        },
      ],
    }
  },
}
</script>

<style scoped>
.box {
  justify-content: center;
}

.column {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.centered-div {
  margin: 0 auto;
  text-align: center;
}
</style>
