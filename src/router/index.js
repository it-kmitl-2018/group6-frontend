import Vue from 'vue'
import Router from 'vue-router'
import invoice from '@/components/invoice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'invoice',
      component: invoice
    }
  ]
})
