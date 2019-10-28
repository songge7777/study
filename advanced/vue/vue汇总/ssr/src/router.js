import Vue from 'vue';
import Router from 'vue-router';

import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';

Vue.use(Router);
console.log('router')
export default()=>{
  let router = new Router({
    mode:'hash',
    routes:[
      {path:'/',component:Bar},
      {path:'/foo',component:Foo}
      // import 需要插件处理
      // {path:'/foo',component:()=>import('./components/Foo.vue')},
    ]
  })
  return router
}