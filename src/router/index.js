import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import projects from '@/components/views/projects'
import project from '@/components/views/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/project/:id',
      name: 'project',
      component: project
    }
  ]
})
