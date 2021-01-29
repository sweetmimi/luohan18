import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


const toPage = () => import('@/components/mb/toPage.vue')
const mbMain = () => import('@/components/mb/index.vue')
const mbHome = () => import('@/components/mb/home.vue')
const mbProduct = () => import('@/components/mb/product.vue')
const mbAbout = () => import('@/components/mb/about.vue')
const mbEvent = () => import('@/components/mb/event.vue')
const mbHelp = () => import('@/components/mb/help.vue')
export default new Router({
  routes: [
    {
      path:'/topage',
      name:'topage',
      component: toPage,
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
