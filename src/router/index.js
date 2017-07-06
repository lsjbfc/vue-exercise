import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import cont from '@/pages/cont';
import ment from '@/pages/menu';
import login from '@/pages/login';
import Trolley from '@/pages/trolley';
import Details from '@/pages/Details';
import Lists from '@/pages/lists';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      component:cont
    },{
      path:'/menu',
      name:"MENU",
      component:ment
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"/trol",
      component:Trolley
    },
    {
      path:"/Details/:details",
      name:"details",
      component:Details
    },
    {
      path:"/list:list",
      name:"list",
      component:Lists
    }
  ]
})
