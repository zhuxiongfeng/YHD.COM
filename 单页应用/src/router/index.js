import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'
import Vpen from '@/components/Vpen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
      path:'/note',
      name:'Vnote',
      component:Vnote
    },
    {
      path:'/pen',
      name:'Vpen',
      component:Vpen
    }
  ]
})
