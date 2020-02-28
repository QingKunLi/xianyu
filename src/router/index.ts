import Vue from 'vue'
import VueRouter from 'vue-router'
import Bill from '@/views/Bill.vue';
import Money from '@/views/Money.vue';
import Charts from '@/views/Charts.vue';
import Exception from '@/views/Exception.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/bill'
  },
  {
    path: '/bill',
    name: 'Bill',
    component: Bill
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '*',
    component: Exception
  }
]

const router = new VueRouter({
  routes
})

export default router
