<template>
  <div>
    <v-container>
      <v-row no-gutters style="height: 100px"> </v-row>
    </v-container>
    <div class="callout alert margin-bottom-2">
      <p class="text-center">
        Due to safe distancing, please note that the number of customers will
        not cross the limit which is currently set at <strong>50</strong>!
      </p>
    </div>

    <div class="container">
      <div id="app">
        <!-- Increase Counter, with an `increaseLimit` of 50 -->
        <b-button variant="success" @click="increaseCounter(50)"
          >Increase</b-button
        >
        <!-- Decrease Counter, with an `decreaseLimit` of 0 -->
        <b-button variant="warning" @click="decreaseCounter(50)"
          >Decrease</b-button
        >

        <b-button variant="danger" @click="resetCounter">Reset</b-button>

        <br /><br /><br />
        <p class="text-center">
          <strong> Counter: {{ counter }}</strong> <br />
          <strong>Result: {{ output }} </strong><br />
        </p>
      </div>
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
      return this.counter >= 50 ? 'Less than limit' : 'Reached limit'
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
.body {
  padding: 1.5rem;
}
.button {
  margin-bottom: 1rem;
  font-size: 15px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
</style>
