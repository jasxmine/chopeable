<script src="https://unpkg.com/vue"></script>
<template>
  <div id="todoApp" class="todo-container">
    <vue-scroll :ops="ops">
      <header class="current-date">
        <div class="date">
          <span class="day-number">{{ date.dayNum }}</span>
          <div class="month-year-wrapper">
            <span class="month">{{ date.month }}</span>
            <span class="year">{{ date.year }}</span>
          </div>
        </div>
        <div class="today">
          <span>{{ date.dayName }}</span>
        </div>
      </header>
      <h3>{{ message }}</h3>
      <form name="todo-form" method="post" action="" @submit.prevent="addTask">
        <input
          v-model="addTodoInput"
          name="add-todo"
          type="text"
          :class="{ error: hasError }"
        />
        <button type="submit">Add</button>
      </form>

      <div v-if="lists.length" class="todo-lists">
        <h3>Tasks</h3>
        <ul>
          <li v-for="(list, index) in filterLists" :key="list.id">
            <input
              :id="'todo-' + index"
              type="checkbox"
              :checked="list.isComplete"
              @change="completeTask($event, list)"
            />
            <span
              class="title"
              contenteditable="true"
              :class="{ completed: list.isComplete }"
              @keydown.enter="updateTask($event, list)"
              @blur="updateTask($event, list)"
              >{{ list.title }}</span
            >
            <span class="remove" @click="removeTask(list)">x</span>
          </li>
        </ul>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import _ from 'lodash'

// import the css file
import 'vuescroll/dist/vuescroll.css'

Vue.use(vuescroll)
Vue.use(VueMoment, {
  moment,
})

export default {
  data() {
    return {
      message: 'Today List',
      addTodoInput: '',
      lists: [],
      hasError: false,
      date: {
        dayNum: '',
        month: '',
        year: '',
        dayName: '',
      },
      ops: {},
    }
  },
  computed: {
    filterLists: function () {
      return _.orderBy(this.lists, ['isComplete', false])
    },
  },
  mounted: function () {
    this.getCurrentDay()
  },
  methods: {
    getCurrentDay: function () {
      const today = new Date()
      let dayName = moment(today).format('dddd')

      let [monthDay, year] = moment().format('ll').split(',')
      let month = monthDay.split(' ')[0]
      const day = monthDay.split(' ')[1]

      month = month.toUpperCase()
      dayName = dayName.toUpperCase()

      this.date.dayNum = day
      this.date.month = month
      this.date.year = year
      this.date.dayName = dayName
    },
    addTask: function (e) {
      //e.preventDefault();

      if (!this.addTodoInput) {
        this.hasError = true
        return
      }

      this.hasError = false
      this.lists.push({
        id: this.lists.length + 1,
        title: this.addTodoInput,
        isComplete: false,
      })

      this.addTodoInput = ''
    },
    removeTask: function (list) {
      var index = _.findIndex(this.lists, list)
      this.lists.splice(index, 1)
    },
    updateTask: function (e, list) {
      e.preventDefault()
      list.title = e.target.innerText
      e.target.blur()
    },
    completeTask: function (e, list) {
      list.isComplete = !list.isComplete
    },
  },
}
</script>

<style scoped>
:root {
  --body-bkg: #f0efe9;
  --todo-bkg: #ffffff;
  --text-color: #5f6271;
  --text-unselected-color: #d7d7dc;
  --control-color: #50e3a4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.welcome-lading {
  width: 100%;
  height: 100%;
}

body {
  background-color: var(--body-bkg);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: var(--text-color);
}

.todo-container {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
  height: 24em; /*490px*/
  padding: 2em;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: auto;
  display: block;
}
ul {
  list-style: none;
}

p {
  margin: 0;
}

header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

header .date {
  display: flex;
  justify-content: space-between;
  width: 22%;
}

header .date .day-number {
  font-size: 2em;
  font-weight: bold;
  line-height: 1em;
}

header .date .month-year-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
}

header .date .month-year-wrapper .month {
  font-weight: bold;
}

header .today {
  font-weight: 600;
}

input[type='radio'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  border: 3px solid var(--text-unselected-color);
  border-radius: 50%;
  cursor: pointer;
  width: 25px;
  height: 25px;
  outline: none;
}

button.add-task-btn {
  background-color: var(--control-color);
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  height: 90px;
  width: 90px;
  position: absolute;
  bottom: -45px;
  left: calc(190px - 45px);
  outline: none;
  transition: 200ms ease-in-out;
}

button.add-task-btn span {
  font-size: 3em;
  font-weight: bold;
  color: #46be8b;
  font-family: none;
}

button.add-task-btn:active {
  transform: scale(0.9);
}

input[type='text'] {
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
}

button {
  background: #3498db;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  border-radius: 28px;

  color: #ffffff;
  font-size: 16px;
  padding: 8px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #3cb0fd;
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
}
input[type='text'].error {
  border: 1px solid red;
}
[contenteditable='true']:focus {
  overflow: hidden;
  border: 1px solid transparent;

  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;

  white-space: nowrap;
  border-radius: 10px;
}

.title {
  display: inline-block;
  width: auto;
  border: 1px solid transparent;
  padding: 8px;
  font-size: 16px;
  vertical-align: middle;
}

.title:hover {
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}

.remove {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  padding: 0px 4px;
}
.remove:hover {
  background: #3cb0fd;
}

.completed {
  text-decoration: line-through;
}

.ps {
  height: 400px;
}
</style>
