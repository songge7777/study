/*
  1、配置文件
  nuxt.config.js
  module.exports = {
    mode:'universal',//普通模式可以 seo
    mode:'spa',// 单页引用
    
    // env 配置环境变量  使用在js中 process.env.baseUrl
    env:{
      baseUrl:process.env.NODE_ENV === 'production'?'localhost':'/'
    }

    // 进度条
    loading:{color:'red'}
    // 使用 进度条等待加载完后才能执行
    mounted(){
      this.$nextTick(()=>{
        this.$nuxt.$loading.start();
        setTimeout(()=>{
          this.$nuxt.$loading.finish()
        })
      })
    }

    //中间件
    router:{
      middleware:'router'
    }
    // 创建middleware/router.js文件
      export default ()=>{
        console.log('路由切换时的')
    }

    // 创建middleware/page.js文件
      export default ()=>{
        console.log('page切换时的')
      }
      // pages/index.js
        export default {
          middleware:'page'
        }
    // 创建middleware/layout.js文件
      export default ()=>{
        console.log('layout切换时的')
      }
      // layouts/default.js
        export default {
          middleware:'layout'
        }
    // plugins
        plugins:[
          '@/plugins/axios',
        ]
    // 创建plugins/axios
    export default (context,redirect)={ // 上下文
      context.$axios.onRequest((config)=>{

      });
      context.$axios.onResponse((config)=>{
        // axios 配置返回结果
        return Promise.resolve(res.data)
      });
    
    }

    // 路由  在pages里面创建的vue文件就是一个路由 会在.nuxt 里面生成配置文件

    // 导航 layouts/default.vue
            layouts <nuxt-link/> == <view-router/>
            用法 <nuxt-link to='/'></nuxt-link>
    // 如果前端跳转是不经过服务端的,刷新页面 会通过服务端返回页面
    // 404页面配置 layouts/error.vue
      <template><div>404</div></template>
      // 默认情况下会把layouts/default.vue 显示出来,需要加配置
      <script>
        export default{
          layout:'NotFound',//指定布局
        }
      </script>
      // 创建一个 layouts/NotFound.vue
        <template><div><nuxt/></div></template>
    // 路径参数
        <nuxt-link to='/detail'>跳转</nuxt-link>
        创建pages/detail/index 或者 创建pages/detail.vue

        <nuxt-link to='/detail/5'>跳转</nuxt-link>
        创建pages/detail/_id.vue  _id叫随机参数
        <template>
          <div>
            {{$route.params.id}}
          </div>
        </template>
        // 如果多级一样嵌套

    // 在服务端执行的生命周期 beforeCreate created 
  async  asyncData(context){
      // 需要返回一个结果
      // 这个方法在服务端和客户端执行
      // 在服务端执行 通过服务获取数据
      // 在客户端执行 ajax 会把返回的数据 合并到data上
      // asyncData只能在页面中才有
      console.log(Object.keys(context))// 获取很多方法
      let {$axios} = context
      let res =await $axios.get('xxx')
      return{
        data : res.data
      }
    }
  
      }

*/