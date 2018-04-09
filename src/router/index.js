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
      path: '/results/show/:id',
      name: 'ShowResult',
      component: ShowResult
    },
    {
      path: '/worklist/add-worklist',
      name: 'CreateWorklist',
      component: CreateWorklist
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

