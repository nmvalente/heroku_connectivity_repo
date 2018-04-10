import Vue from 'vue'
import Router from 'vue-router'
import ShowResult from '@/components/ShowResult'
import CreateWorklist from '@/components/CreateWorklist'
import Results from '@/components/Results'
import Worklist from '@/components/Worklist'
import Index from '@/components/Index'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/worklist',
      name: 'Worklist',
      component: Worklist
    },
    {
      path: '/results/:id',
      name: 'ShowResult',
      component: ShowResult
    },
    {
      path: '/worklist/add-worklist',
      name: 'CreateWorklist',
      component: CreateWorklist
    },/*
    {
      path: '/results/date_min=:min&date_max=:max',
      name: 'CreateWorklist',
      component: CreateWorklist
    },*/
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

