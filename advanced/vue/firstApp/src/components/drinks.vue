<template>
  <div>
    <Slott title="酒水" cname="layout">
      公共地方-------------------
      <br/>
      <br/>
      <br/>
      <div slot='main'>
        白酒  <el-button round @click='btn'>添加</el-button>
        <br/>
        啤酒  <el-button round @click='btn'>添加</el-button>
        <br/>
        果汁  <el-button round @click='btn'>添加</el-button>
      </div>
    </Slott>  
    <Box v-if='isShow' @c='a'/>
  </div>
</template>

<script>
import Slott from './slot'
import Box from './box'

  export default {
    components:{
      Slott,
      Box
    },
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      btn(){
          this.isShow = true
      },
      a(data){
        this.isShow = false
        console.log('子组件传递过来的值',data)
      }
    }
  }
</script>

<style >
.layout{
  color:red;
}
</style>