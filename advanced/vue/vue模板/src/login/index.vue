<template>
  <div class='login'>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="帐号">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登陆</el-button>
            </el-form-item>
        </el-form>
      
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        labelPosition: 'right',
        formLabelAlign:{
          name:'',
          region:'',
          type:''
        }
      }
    },
    methods:{
      onSubmit(){
        console.log(this.formLabelAlign)
        this.$router.push({name:'main',params:{id:123}})
      }
    }
  }
</script>

<style scoped>
.login{
  margin-top:200px
}
</style>