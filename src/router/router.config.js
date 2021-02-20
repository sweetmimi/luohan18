/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/topage.vue'),
    redirect: '/step1'
  },
  {
    path: '/step1',
    component: () => import('@/views/step1.vue'),
    meta: {
      title: '数罗汉',
      keepAlive: false
    },
  },

  {
    path: '/step2',
    component: () => import('@/views/step2-1.vue'),
    meta: {
      title: '罗汉堂',
       keepAlive: false
    },
  },
   {
     path: '/step22',
     component: () => import('@/views/step2-2.vue'),
     meta: {
       title: '罗汉堂',
       keepAlive: false
     },
   },
   {
     path: '/step3',
     component: () => import('@/views/step3.vue'),
     meta: {
       title: '本尊罗汉',
       keepAlive: false
     },
   },
  {
    path: '/share',
    component: () => import('@/views/share.vue'),
    meta: {
      title: '拜罗汉',
      keepAlive: false
    },
  },
  {
    path: '/my',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '拜罗汉', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '互动', keepAlive: false }
      }
    ]
  }
]
