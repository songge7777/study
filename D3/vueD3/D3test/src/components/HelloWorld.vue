<template>
  <div>
    <div id='container'></div>
  </div>
</template>

<script>
import * as d3 from 'd3';

  export default {
      mounted() {
        // svg 选中目标元素
        d3.select('#container')
        .append("svg")
        //width,height
        .attr("width",500)
        .attr("height",250) 
        
        //下面svg 选择上面的svg
        let g = d3.select("svg")
            .append("g")
            .attr("transform","translate(500,30)")



      },
  }
</script>

<style scoped>
#container{
  background: #ddd;
  width: 500px;
  height: 250px;
}
</style>