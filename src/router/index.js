import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TicketList from '@/views/ticket/ticket.list'
import TicketDetail from '@/views/ticket/ticket.detail'
import TicketOrder from '@/views/ticket/ticket.order'
import Profile from '@/views/profile/profile'
Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'ticket-list',
      component: TicketList
    },
    {
      path: '/ticket/detail/:id',
      name: 'ticket-detail',
      component: TicketDetail
    },
    {
      path: '/ticket/order/:id',
      name: 'ticket-order',
      component: TicketOrder
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]

const router = new Router({
  // mode: 'history',  //history模式
  routes
})

router.beforeEach((to, from, next) => {
  store._mutations.pushLoadStack[0]()
  next()
})


router.afterEach(route => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.onscroll = null
  setTimeout(() => {
    store._mutations.completeLoad[0]()
  }, 100)
})

export default new Router({
  routes
})
