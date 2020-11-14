<template>
  <div id="demo" :class="[{ collapsed: collapsed }, { onmobile: isOnMobile }]">
    <div class="demo">
      <div class="container">
        <h1>Admin Dashboard</h1>

        <hr style="margin: 50px 0px; border: 1px solid #e3e3e3" />
        <router-view />
      </div>

      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div
        v-if="isOnMobile && !collapsed"
        class="sidebar-overlay"
        @click="collapsed = true"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserTie,
  faCalendarAlt,
  faChartBar,
  faUserClock,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserTie, faCalendarAlt, faEdit, faChartBar, faUserClock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSidebarMenu)

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`,
}

export default {
  name: 'App',
  data() {
    return {
      components: {
        VueSidebarMenu,
        FontAwesomeIcon,
        faUserTie,
        faCalendarAlt,
        faEdit,
        faChartBar,
        faUserClock,
      },
      menu: [
        {
          header: true,
          title: 'Main',
          hiddenOnCollapse: true,
        },
        {
          href: '/dashboard',
          title: 'Dashboard',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'user-tie',
            },
          },
        },

        {
          header: true,
          title: 'Management',
          hiddenOnCollapse: true,
        },
        {
          href: '/calendar',
          title: 'Calendar',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'calendar-alt',
            },
          },
        },

        {
          href: '/VisualizeTable',
          title: 'Table',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'edit',
            },
          },
        },
        {
          href: '/queue',
          title: 'Queue',
          icon: {
            element: 'font-awesome-icon',
            attributes: {
              icon: 'user-clock',
            },
          },
        },
        {
          component: separator,
        },
      ],
      collapsed: false,
      selectedTheme: 'Default-theme',
      isOnMobile: false,
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed
    },
    onItemClick(event, item, node) {},
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: white;
  color: #262626;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 900px;
}
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: white;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
