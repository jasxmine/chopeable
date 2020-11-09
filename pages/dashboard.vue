<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <v-row no-gutters style="height: 50px"> </v-row>
        </v-container>
        <h2>Upcoming Appointments</h2>
        <b-row>
          <b-col cols="7">
            <div>
              <b-table-simple responsive="true" hover outlined>
                <b-thead head-variant="light">
                  <b-tr>
                    <b-th rowspan="2">Booking Time</b-th>
                    <b-th rowspan="2">Customer's Name</b-th>
                    <b-th colspan="4">Pax</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr v-for="event in events" :key="event.key">
                    <b-td>{{ event.start }}</b-td>
                    <b-td>{{ event.name }}</b-td>
                    <b-td>{{ event.details }}</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
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
import { db } from '@/main'

export default {
  name: 'Admin',
  components: {
    LineChart,
    DoughnutChart,
  },
  path: '../layout/admin.vue',
  layout: 'admin',
  meta: {
    template: 'admin',
  },
  data: () => ({
    events: [],
    testCollection: [],
    percent: '25',
  }),
  mounted() {
    db.collection('calEvent')
      .orderBy('start')
      .where('start', '>', new Date().toISOString().substr(0, 10))
      .get()
      .then((snap) => {
        const testCollection = []
        const events = []
        snap.forEach((doc) => {
          testCollection.push({
            [doc.id]: doc.data(),
          })
        })
        snap.forEach((doc) => {
          const appData = doc.data()
          appData.id = doc.id
          events.push(doc.data())
        })
        this.testCollection = testCollection
        this.events = events
      })
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
