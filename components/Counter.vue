<template>
  <div class="container">
    <div>
      <b-alert show variant="info">
        <p class="text-center">
          Due to safe distancing, please note that the number of customers will
          not cross the limit which is currently set at <strong>50</strong>!
        </p>
      </b-alert>
    </div>

    <div id="app" class="justify-content-center">
      <b-row>
        <b-col cols="10">
          <p style="color: #f0ad4e">Currently serving <br /></p>
          <strong>
            <p style="color: #0b426d">Token Number <br /></p>
          </strong>
          <div class="div1">
            <strong>
              <p style="color: #f0ad4e">{{ counter }}</p>
            </strong>
          </div>

          <br /><br />
          <p>
            <strong>
              Waiting time <br />
              {{ output }} minutes </strong
            ><br />
          </p>
        </b-col>

        <b-col cols="2">
          <br />
          <b-row>
            <b-button class="btn1" size="lg" @click="increaseCounter(50)"
              >Increase</b-button
            >
          </b-row>
          <b-row>
            <b-button class="btn2" size="lg" @click="decreaseCounter(0)"
              >Decrease</b-button
            >
          </b-row>
          <b-row>
            <b-button class="btn3" size="lg" @click="resetCounter"
              >Reset</b-button
            >
          </b-row>
        </b-col>
      </b-row>

      <br /><br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0, // Initial Value
    }
  },
  computed: {
    output() {
      // Output for computed property!
      return 0.5 * this.counter
    },
  },
  methods: {
    increaseCounter(increaseLimit) {
      // Increase
      if (this.counter < increaseLimit) this.counter++
    },
    decreaseCounter(decreaseLimit) {
      // Decrease
      if (this.counter > decreaseLimit) this.counter--
    },
    resetCounter() {
      // Reset
      this.counter = 0
    },
  },
}
</script>

<style scoped>
p {
  font-size: 20px;
}

button {
  margin-bottom: 1rem;
  font-size: 15px;
  width: 100px;
}

.container {
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
  display: block;
}

.btn1 {
  color: #fff !important;
  background-color: #449474 !important;
  border-color: #449474 !important;
  margin-bottom: 10%;
  margin-top: 10%;
}

.btn2 {
  color: #fff !important;
  background-color: #ecac8b !important;
  border-color: #ecac8b !important;
  margin-bottom: 5%;
  margin-top: 5%;
}

.btn3 {
  color: #fff !important;
  background-color: #d5747c !important;
  border-color: #d5747c !important;
  margin-bottom: 10%;
  margin-top: 10%;
}

.counter {
  width: 50px;
  border-color: #d5747c;
  border: 1px;
}

.div1 {
  display: inline-block;
  border: 3px;
  border-style: solid;
  border-color: #f0ad4e;
  padding: 1em;
  width: 10%;
  border-radius: 20%;
}
</style>
