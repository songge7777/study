<template>
  <div id="app">
    123
    <!-- <router-view></router-view> -->

    <button @click="btn1">one</button>
    <button @click="btn2">two</button>

    <div v-if="isShow1==1">
      <A :charts="option1" data='show1' :key="1"></A>
      <!-- <A :charts="option2" data='show2'></A> -->
    </div>
    <div v-if="isShow1==2">
      <A :charts="option2" data='show2' :key="2" ></A>
    </div>
  </div>
</template>

<script>
import A from './a.vue';
export default {
  name: 'App',
  data(){
    return{
      message: 'Vue的生命周期',
      isShow1:1,
      option1:{
          title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
      },
      option2:{
          title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 2, 3, 1, 10, 9]
            }]
      }
    }
  },
  components:{
    A
  },
  methods:{
  
    btn1(){
      this.isShow1 = 1
    },
    btn2(){
      this.isShow1 = 2
    }
  },
  mounted(){
    // this.$nextTick(()=>{
      // console.log(echarts)
    // })
  }
}
</script>

<style>
*{
  margin:0;
  padding:0
}
</style>
