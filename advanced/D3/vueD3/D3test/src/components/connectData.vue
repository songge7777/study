<template>
  <div class="body">

  </div>
</template>

<script>
import * as d3 from 'd3';
  export default {
    mounted() {
      var  popData = [1, 1.5, 2.1, 2.6, 3.4, 4.5, 5.1, 6, 6.6, 6.7, 7.1, 7.3, 8.1, 8.9, 8.8, 8.6, 8.8 ];
      var  axisData = [0, 2.5, 5, 7.5];
      var  barLabels = ["80 and up","75-79","70-74","65-69","60-64","55-59","50-54","45-49",
                                    "40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"];
    
      var width = 400,
              leftMargin = 100,
              topMargin = 30,
              barHeight = 20,
              barGap = 5,
              tickGap = 5,
              tickHeight = 10,
              scaleFactor = width/popData[16],
              barSpacing = barHeight + barGap,
              tranlatrText = "translate("+leftMargin+","+topMargin+")",
              scaleText = "scale("+scaleFactor+",1)";

      var body = d3.select('.body') 

          body.append("h2")
            .text('Age distribution of the world');
          
          body.append("div")
            .attr("class","top-label age-label")
            .style('width',leftMargin+'px')
           .append("p")
            .text('age group');

          body.append("div")
            .attr("class","top-label")
           .append("p")
            .text("portion of thr population")

          body.append("div")
            .attr("class","clearfix")

          var svg = body.append("svg");

          var barGroup = svg.append("g")
                .attr("transform",tranlatrText+" "+scaleText)
                .attr("class","bar")

          // for(var i = 0;i<popData.length ; i++){
          //     barGroup.append("rect")
          //       .attr("y",0)
          //       .attr("x",i)
          //       .attr("height",10*popData[i])
          //       .attr("width",1/2)
          // }

          // x,y代表元素的位子 width和height代表宽高
          barGroup.selectAll('rect')
            .data(popData)
            .enter()
            .append('rect')
            .attr("x",0)
            .attr("height",barHeight)
            .attr("width",(d,i)=>{return d})
            .attr("y",(d,i)=>{return i*barSpacing})  
          
          var barLavelGroup = svg.append("g")
                  .attr("transform",tranlatrText)
                  .attr("class","bar-label");

              barLavelGroup.selectAll('text')
                .data(barLabels)  
                .enter().append('text')
                .text((d)=>{return d})
                .attr('x',-10)
                .attr('y',(d,i)=>{return i*barSpacing + barHeight*(2/3)});
          
          var axisTickGroup = svg.append("g")
                  .attr("transform",tranlatrText)
                  .attr("stroke","black")
              
              axisTickGroup.selectAll('line')
                  .data(axisData)
                  .enter().append('line')
                  .attr("x1",(d)=>{return d*scaleFactor})
                  .attr("x2",(d)=>{return d*scaleFactor})
                  .attr("y1",0)
                  .attr("y2",-tickHeight);

          var axisLabel= svg.append('g')
                  .attr("transform",tranlatrText)
                  .attr("class","axis-label")
              
              axisLabel.selectAll('text')
                  .data(axisData)
                .enter().append('text')
                  .attr("x",(d)=>{return d * scaleFactor})
                  .attr("y",-tickHeight - tickGap)
                  .text((d)=>{return d+'%'})

    },
  }
</script>

<style>
.body{
  font-family: Arial, Helvetica
}
svg{
  width: 500px;
  height: 500px;
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