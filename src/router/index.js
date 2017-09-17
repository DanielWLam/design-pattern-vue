import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/view/Admin'
import Welcome from '@/view/Welcome'
import Font from '@/view/Font'
import Margin from '@/view/Margin'
import Color from '@/view/Color'
import Layout from '@/view/Layout'
import Text from '@/view/Text'
import Dialog from '@/view/Dialog'
import Table from '@/view/Table'
import Card from '@/view/Card'
import Animate from '@/view/Animate'
import Light from '@/view/Light'
import Close from '@/view/Close'
import Repeat from '@/view/Repeat'
import Align from '@/view/Align'
import Reaction from '@/view/Reaction'

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
      redirect: {name: 'welcome'},
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: Welcome
        },
        {
          path: 'font',
          name: 'font',
          component: Font
        },
        {
          path: 'margin',
          name: 'margin',
          component: Margin
        },
        {
          path: 'color',
          name: 'color',
          component: Color
        },
        {
          path: 'layout',
          name: 'layout',
          component: Layout
        },
        {
          path: 'text',
          name: 'text',
          component: Text
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: Dialog
        },
        {
          path: 'table',
          name: 'table',
          component: Table
        },
        {
          path: 'card',
          name: 'card',
          component: Card
        },
        {
          path: 'animate',
          name: 'animate',
          component: Animate
        },
        {
          path: 'light',
          name: 'light',
          component: Light
        },
        {
          path: 'close',
          name: 'close',
          component: Close
        },
        {
          path: 'repeat',
          name: 'repeat',
          component: Repeat
        },
        {
          path: 'align',
          name: 'align',
          component: Align
        },
        {
          path: 'reaction',
          name: 'reaction',
          component: Reaction
        }
      ]
    }
  ]
})
