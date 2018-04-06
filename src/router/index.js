import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'
import Results from '@/components/Results'
import Worklist from '@/components/Worklist'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/show-book/:id',
      name: 'ShowBook',
      component: ShowBook
    },
    {
      path: '/add-book',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})
