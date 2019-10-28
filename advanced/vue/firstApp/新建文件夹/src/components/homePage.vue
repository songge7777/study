<template>
  <div class="homePage">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router=true  @select="handleSelect" active-text-color='#409EFF' text-color='#ffffff'  background-color="#545c64">
      <el-menu-item index="/">
        首页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的主食</template>
        <el-menu-item index="/stapleFood">
          主食
        </el-menu-item>
        <el-menu-item index="fruitTray">
          果盘
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/drinks" >
          酒水
      </el-menu-item>
      <el-menu-item index="/order">订单管理</el-menu-item>
    </el-menu>
    <router-view ></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
  export default {
    data(){
      return{
         activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods:{
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },

  }
</script>

<style scoped>
.co{
  color:red !important
}
</style>