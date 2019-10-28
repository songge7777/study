<template>
  <div>
    <el-col :span="14" :offset='10'>
      <h4 :class="cname">-{{title}}-</h4>
    </el-col>
    <el-col :span="14" :offset='8'>
        <slot/>
    </el-col>
    <el-col :span="14" :offset='8'>
      <slot name='main'/>
    </el-col>
      
  </div>
</template>

<script>
  export default {
    // props:{
    //   cname:{
    //     type:String,
    //     default:''
    //   },
    //   title:{
    //     type:String,
    //     default:''
    //   } 
    // }
    props:['cname','title'],
    mounted() {
      console.log('===========',this.cname)
    },
  }
</script>

<style scoped>

</style>