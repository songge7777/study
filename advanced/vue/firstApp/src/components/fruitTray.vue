<template>
  <div class="fruitTray">
    <el-row>
      <el-col :span="14" :offset='10'>
        果盘 : 20元/盘
      </el-col>
      <el-col :span="14" :offset='8'>
      <el-checkbox-group 
          v-model="checkedCities1"
          :min="0"
          :max="4"
          class="checkboxGroup"
          >
          <el-checkbox class="checkboxList" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="14" :offset='8' class="btn">
        <el-button type="primary" @click='btn'>点菜</el-button>    
      </el-col>
    </el-row>
  </div>
</template>

<script>
const cityOptions = ['芒果果盘', '西瓜果盘', '苹果果盘', '橘子果盘'];
  export default {
      data(){
        return {
          checkedCities1: [],
          cities: cityOptions
        }
      },
      methods:{
        btn(){
          console.log(this.checkedCities1)
        }
      }
  }
</script>
<style>


</style>

<style scoped>
.btn{
  margin-top:100px
}
.checkboxGroup{
    height: 200px !important;
    display: flex  !important;
    flex-direction: column  !important;
}
.checkboxList{
    margin-left: 0;
    margin-top:1em
}
</style>