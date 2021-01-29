import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const pcMain = () => import('@/components/pc/index.vue')
const pcHome = () => import('@/components/pc/home.vue')
const pcProduct = () => import('@/components/pc/product.vue')
const pcAbout = () => import('@/components/pc/about.vue')
const pcEvent = () => import('@/components/pc/event.vue')
const pcHelp = () => import('@/components/pc/help.vue')

const mbMain = () => import('@/components/mb/index.vue')
const mbHome = () => import('@/components/mb/home.vue')
const mbProduct = () => import('@/components/mb/product.vue')
const mbAbout = () => import('@/components/mb/about.vue')
const mbEvent = () => import('@/components/mb/event.vue')
const mbHelp = () => import('@/components/mb/help.vue')
export default new Router({
  routes: [{
      path: '/pc',
      name: 'pcMain',
      component: pcMain,
      children: [{
          path: 'home',
          name: 'pcHome',
          component: pcHome,
        },
        {
          path: 'product',
          name: 'pcProduct',
          component: pcProduct,
        },
        {
          path: 'about',
          name: 'pcAbout',
          component: pcAbout,
        },
        {
          path: 'event',
          name: 'pcEvent',
          component: pcEvent,
        },
        {
          path: 'help',
          name: 'pcHelp',
          component: pcHelp,
        },

      ]
    },
    {
      path: '/mb',
      name: 'mbMain',
      component: mbMain,
      children: [{
          path: 'home',
          name: 'mbHome',
          component: mbHome,
        },
        {
          path: 'product',
          name: 'mbProduct',
          component: mbProduct,
        },
        {
          path: 'about',
          name: 'mbAbout',
          component: mbAbout,
        },
        {
          path: 'event',
          name: 'mbEvent',
          component: mbEvent,
        },
        {
          path: 'help',
          name: 'mbHelp',
          component: mbHelp,
        },

      ]
    },

  ]
})
