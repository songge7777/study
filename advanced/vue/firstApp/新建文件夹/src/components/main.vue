<template>
  <div>
     我要点菜
     <el-button type="primary"  @click='btn'>提交</el-button>
  </div>
</template>

<script>
  export default {
    methods:{
      btn(){
        let obj = {
          name:'sg'
        }
        this.aixo.post('/123',obj).then(data=>{
          // console.log('main',data)
        })
      }
    }
  }
</script>

<style scoped>

</style>