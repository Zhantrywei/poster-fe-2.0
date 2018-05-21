import Vue from 'vue'
import Router from 'vue-router'

//组件导入
import Main from '../pages/Main.vue'
import Form from '../pages/Form.vue'
import Poster from '../pages/Poster.vue'
import FormDesign from '../pages/FormDesign.vue'
import PosterDesign from '../pages/PosterDesign.vue'
import Activity from '../pages/index/Activity.vue'
import Enroll from '../pages/index/Enroll.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: "active",
  routes: [
    {
      path: '/', 
      redirect: '/index'   
    },
    {
      path: '/index',
      name: 'index',
      component: Main,
      redirect: '/index/activity',
      children: [
        {
          name: 'activity',
          path: 'activity',
          component: Activity
        },
        {
          name: 'enroll',
          path: 'enroll',
          component: Enroll
        },
      ]
    },
    {
      path: '/formdesign',
      name: 'formdesign',
      component: FormDesign
    },
    {
      path: '/posterdesign',
      name: 'posterdesign',
      component: PosterDesign
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/poster',
      name: 'poster',
      component: Poster
    }
  ]
})
