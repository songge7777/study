/*
  1、项目构建 初始化 
    vue init webpack firstapp
  2、.eslintignore 不开启检查   
     配置  /* 
  3、安装第三方库
    cnpm install -S axios element-ui vue-router vuex
  4、element-ui
    http://element-cn.eleme.io/#/zh-CN/component/installation
    引入样式
    import 'element-ui/lib/theme-chalk/index.css';
    按需引入看文档
  
    assets 放资源文件  图片等
    axios 处理接口请求
    components 放组件 
    login 登录(跟组件 页面一样)
    router 路由配置
    store vuex仓库

    import { sync } from 'vuex-router-sync'
    // router & store 同步 
    // store 里可以直接获取router信息
    // moduleName 起别名
    // store要放前面 router后面 不然报错
    sync( store, router,{ moduleName: 'RouteModule'} )


    import createPersistedState from 'vuex-persistedstate'
    //createPersistedState 不放任何參數 vuex数据刷新 不会消失
    //storage: window.sessionStorage vuex数据跟sessionStorage 关联起来
    export default new vuex.Store({
      modules: {
        one,
        two
      },
      plugins: [
        createPersistedState({
          storage: window.sessionStorage
        })
      ]
    })

 
    import { mapState } from 'vuex'
      computed:{
        //  count(){
        //          return this.$store.state;
        //       },
        // 上下两个是等价的 count是一个对象里面是所有的store的state
          ...mapState({
                count: state => state
            })
      }
    
    // store 带命名空间的模块,加上他获取store的时候前面会加上modules下面的keys很好的区别值是那个仓库的
    namespaced: true
      modules: {
        'Apps':one,
        two
      },
      ...mapState 
        获取state不会变动
      
      ...mapGetters 
        computed:{
          //  getCount(){
          //          return this.$store.two/getCount;
          //       },
          // 上下两个是等价的
            ...mapGetters('two/',{
                  getCount: 'getCount'
            })
            //或者
            ...mapGetters('two/',['getCount'])
        }
      
      ...mapMutations
        //里面必须是同步 异步可以用actions
        methods:{
          // namespaced没有的时候
           ...mapMutations([
            'aaaaaaa',
            "sssss" 
          ]) 
          //namespaced 存在的时候
          ...mapMutations([
            'aaaaaaa',
            "sssss" 
          ])
          //以前写法
        this.$store.commit('aaaaaaa',{key:"123"})
        }
      
      ...mapActions
        //处理异步
        methods:{
          ...mapActions([
            'increment',
          ]),
        }
        btn(){
          this.increment({key:'value1'})
        }
        store:
        function getData (data){
          return Promise.resolve(data)
        }
        const actions = {
          async increment ({ commit },data) {
            commit('add', await getData(data))
          },
        }

    two: {
      namespaced: true,
      // 模块内容（module assets）
      state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },
      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: { ... },
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },
        // 进一步嵌套命名空间
        posts: {
          namespaced: true,
          state: { ... },
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }


*/