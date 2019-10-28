/*
  1、
    $route.hash: 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。

    $route.fullPath: 完成解析后的 URL，包含查询参数和 hash 的完整路径
    
    $route.matched:一个数组，包含当前路由的所有嵌套路径片段的 路由记录 (包含children下路径)。

    $route.name: 当前路由的名称

      mode:'history'
    使用后打包文件是空白的
    在nginx下可以打开
    这个除去url# 要配合后端用


  2、
    npm run build　打包问题
    打包出来　路径访问错误　
    
    处理　找config/index　  
      build对象 将assetsPublicPath: '/'
          改为assetsPublicPath: './'
            dev 对象 里面的assetsPublicPath: '/' /前面不能加. 
    linux 上打包错误 注意权限问题  可以sudo npm install 

  3、
    vue中 .sync用法
    父组件:
    <comp :foo.sync="bar"></comp>
    会被扩展:
    <comp :foo="bar" @update:foo='val=>bar = val' />
    当子组件需要更新foo的值时:
    this.$emit('update:foo',newValue)


  4、在package.json 配置跨域 
    后面的参数就是访问的地址
    "proxy":"http://localhost:3002"
    在请求的时候 直接写后面的路径 就可以了
  
  5、
  	数据双向绑定问题
    如果obj 里面没有值 ,通过方法obj['a']=1 设置值
    {{obj.a}}能获取到 但不会响应式  

    处理办法 obj:{a:''} 在obj 里面写一个空a:''
    data(){
      retrun{
        obj:{}
      }	
    }

    测试 对象里面没有是值 进行绑定 也可能获取到
    
  6、el-select v-model 结合
     <el-select v-model="data.a"   ">
      <el-option  v-for="(item,index) in initData"  :key="item.name" :label="item.name" :value="item.name"/>
    </el-select>
    
    data.a的值一定要跟 :value='item.name' 值一样 不然初始下啦 不会默认有蓝色
    :value 里面 就是绑定 v-model 上去的

  7、props 
    父组件 传给子组件的参数
    不能直接对他赋值, 可以对v-model 进行绑定(效果和data 里面定义的一样)
    若他是一个对象 可以给对象里面的值进行修改


*/