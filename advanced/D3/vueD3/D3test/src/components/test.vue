<template>
  <div class="body">

  </div>
</template>

<script>
import * as d3 from 'd3';
  export default {
    mounted() {
      var  popData = [1, 1.5, 2.1, 2.6, 3.4, 4.5, 5.1, 6, 6.6, 6.7, 7.1, 7.3, 8.1, 8.9, 8.8, 8.6, 8.8 ];
      var  axisData = [0, 2.5, 5, 7.5 ,8.9];
      var  barLabels = ["80 and up","75-79","70-74","65-69","60-64","55-59","50-54","45-49",
                                    "40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"];

      var leftMargin = 100,
          topMargin = 30,
          scaleFactor = 400/d3.max(popData,(i)=>{return i}),
          tranlatrText = `translate(${leftMargin},${topMargin})`,
          scaleText = `scale(${scaleFactor},1)`

      var x = d3.scaleLinear()
                  .domain([0,7.5])
                  .range([0,350])

      var body = d3.select('.body')

      var  svg = body.append('svg')
              .attr('width',500)
              .attr('height',400);


      var barGroup = svg.append('g')  
                      .attr('transform',tranlatrText+''+scaleText) 
                      .attr('class','bar'); 

          barGroup.selectAll('rect')
            .data(popData)
            .enter().append('rect')
            .attr('x',0)
            .attr('y',(i,d)=>{return d*20})
            .attr('width',(i)=>{return i})
            .attr('height',(i)=>{return 10})  

      var axisTickGroup = svg.append('g')
                          .attr('transform',tranlatrText)
                          .attr('stroke','black')

          axisTickGroup.selectAll('line')
                      .data(axisData)
                      .enter().append('line')
                      .attr('x1',(i)=>{return x(i)})
                      .attr('x2',(i)=>{return x(i)}) 
                      .attr('y1',0) 
                      .attr('y2',-10) 

      var textGroup = svg.append('g')
                          .attr('transform',tranlatrText)
                          .attr('stroke','black')
          
          textGroup.selectAll('text')
                      .data(axisData)
                      .enter().append('text')
                      .attr('x',(i)=>{return x(i)-10})
                      .attr('y',-15)
                      .text((i)=>{return i+'%'})                       
          


               
    },
  }
</script>

<style>
.body{
  font-family: Arial, Helvetica
}

.top-label{
  font-size: 13px;
  font-style: italic;
  text-transform: uppercase;
  float: left;
}
.age-label{
  text-align: right;
  font-weight: bold;
  width: 90px;
  padding-right: 10px;
}
.clearfix{
  clear: both;
}
.bar{
  fill: darkslateblue;
}
.bar-label{
  text-anchor: end;
}
.axis-label{
  text-anchor: middle;
  font-size: 13px;
}


</style>