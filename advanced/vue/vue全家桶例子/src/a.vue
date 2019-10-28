<template>
  <div id="app">
    {{data}}--{{_uid}}
      <div :id="_uid" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>

export default {
  props:['charts','data'],
  name: 'App',
  data(){
    return{
      message: 'Vue的生命周期',
      isShow1:1
    }
  },
  methods:{
    v1(){
      var myChart = echarts.init(document.getElementById(this._uid));
      
      myChart.setOption(this.charts);
    }
  },
  mounted(){
    console.log(this.data)
    this.$nextTick(()=>{
      this.v1()
    })
  }
}
</script>

<style>
*{
  margin:0;
  padding:0
}
</style>
