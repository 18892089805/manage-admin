import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.originalPush=function(){
  return originalPush.call(this.location).catch(err=>err)
}
Vue.use(VueRouter)

const routes = [
  {
      path:"/",
      component:()=>import('@/views/Main'),
      children:[
        {
          path: '/',
          name: 'home',
          component: ()=>import('@/views/Home/Home'),
        },
        {
          path: '/user',
          name: 'user',
          component: ()=>import('@/views/UserManage/UserManage'),
        },
      ]    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
