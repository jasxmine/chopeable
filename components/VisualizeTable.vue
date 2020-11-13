<template>
  <div class="wrapper">
    <div class="data">
      <ul>
        <h3>double click a table to reserve it!</h3>
        <li
          v-for="table in tables"
          :key="table.name"
          style="list-style-type: none"
        >
          Table: {{ tables.indexOf(table) + 1 }} x: {{ table.x }} y:
          {{ table.y }}
          {{ table.reserved }}
        </li>
      </ul>
      <button @click="addTable">Add Table</button>
      <button @click="closeTable">Close for social distancing</button>
    </div>
    <v-stage
      id="container"
      ref="stage"
      :config="stageSize"
      style="linear-gradient(#e6e6e6 .1rem, transparent .1rem), linear-gradient(90deg, #ddd .1rem, transparent .1rem)"
      @mousedown="handleStageMouseDown"
      @touchstart="handleStageMouseDown"
    >
      <v-layer ref="layer">
        <v-rect
          v-for="item in tables"
          :key="item.id"
          :config="item"
          @transformend="handleTransformEnd"
        />
        <v-text
          v-for="item in closedTables"
          :key="item.id"
          :config="item"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
        />

        }" />
        <v-transformer ref="transformer" />
      </v-layer>
    </v-stage>
  </div>
</template>

<style lang="css" scoped>
#container {
  background-image: linear-gradient(#e6e6e6 0.1rem, transparent 0.1rem),
    linear-gradient(90deg, #ddd 0.1rem, transparent 0.1rem) !important;
  background-size: 2rem 2rem !important;
}
</style>

<script>
import Vue from 'vue'
import VueKonva from 'vue-konva'

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')

import { v4 as uuidv4 } from 'uuid'
// import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueKonva)
// import MButton from 'vue-m-button'

const width = window.innerWidth
const height = window.innerHeight
// var rectangleLayer = new Konva.Layer();

// Vue.use(MButton)
export default {
  data() {
    return {
      stageSize: {
        width,
        height,
      },
      tables: [],
      closedTables: [],
      selectedShapeName: '',
      tableNumbers: [],
    }
  },
  methods: {
    addTable(e) {
      e.preventDefault()
      this.tables.push({
        rotation: 0,
        x: 600,
        y: 10,
        width: 100,
        height: 100,
        scaleX: 1,
        scaleY: 1,
        fill: '#EDFAED',
        name: uuidv4(),
        draggable: true,
        reserved: 'Currently Avalable',
      })
    },
    closeTable(e) {
      e.preventDefault()
      this.closedTables.push({
        text: 'Closed: Social Distancing',
        x: 50,
        y: 50,
        draggable: true,
        fill: 'red',
      })
    },
    handleTransformEnd(e) {
      // shape is transformed, let us save new attrs back to the node
      // find element in our state
      const rect = this.tables.find((r) => r.name === this.selectedShapeName)
      // update the state
      rect.x = e.target.x()
      rect.y = e.target.y()
      rect.rotation = e.target.rotation()
      rect.scaleX = e.target.scaleX()
      rect.scaleY = e.target.scaleY()
    },
    handleDragStart() {
      this.isDragging = true
    },
    handleDragEnd() {
      this.isDragging = false
    },
    handleStageMouseDown(e) {
      // clicked on stage - clear selection
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = ''
        this.updateTransformer()
        return
      }

      // clicked on transformer - do nothing
      const clickedOnTransformer =
        e.target.getParent().className === 'Transformer'
      if (clickedOnTransformer) {
        return
      }

      // find clicked rect by its name
      const name = e.target.name()
      // console.log("HERE", e)
      const rect = this.tables.find((r) => r.name === name)
      if (rect) {
        this.selectedShapeName = name
      } else {
        this.selectedShapeName = ''
      }
      this.updateTransformer(rect)
    },
    updateTransformer(rect) {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getNode()
      const stage = transformerNode.getStage()
      const { selectedShapeName } = this

      const selectedNode = stage.findOne('.' + selectedShapeName)
      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return
      }
      stage.on('click', function (e) {
        this.renderComponent = true
        // e.target is a clicked Konva.Shape or current stage if you clicked on empty space
        e.target.attrs.fill = '#FEECEA' // change color to red for booked
        rect.reserved = 'Table booked!'
      })
      // console.log("rect is", rect);

      if (selectedNode) {
        // attach to another node
        transformerNode.nodes([selectedNode])
      } else {
        // remove transformer
        transformerNode.nodes([])
      }
      transformerNode.getLayer().batchDraw()
    },
  },
}
</script>
