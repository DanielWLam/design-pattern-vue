import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/view/Admin'
import Welcome from '@/view/Welcome'
import Font from '@/view/Font'
import Margin from '@/view/Margin'
import Color from '@/view/Color'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/font',
          name: 'font',
          component: Font
        },
        {
          path: '/margin',
          name: 'margin',
          component: Margin
        },
        {
          path: '/color',
          name: 'color',
          component: Color
        }
      ]
    }
  ]
})
