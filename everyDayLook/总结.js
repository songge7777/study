/*
    1、常用的一些随机方法
      Math.ceil() 往下取整  floor 往上取整 round 四舍五入 abs 绝对值
      x-y 
      Math.round(Math.random()*(x-y)+x)
      1-x
      Math.ceil(Math.random()*x)||1
      0-(x-1)
      Math.floor(Math.random()*x)
      0-x
      Math.round(Math.random()*x)

    2、& && |  || ^ 使用场景
     二进制 
      ^ 异或  二进制位 相同取 0 不同取 1
        例子 1^1 => 0 , 0^1 => 1
      | 或 二进制 有1输出1  全0输出0
      & 与 二进制 全1输出1 有0输出0
     逻辑运算
      || 或 3||5 => 3 全面有值就返回前面
      && 与 3&&5 => 5  前面为true就返回后面
    3、& 使用场景  根据不同参数 处理要执行的逻辑  取代了 多个if判断
    
    function fn(value,mode){
      if(mode & 1){
        console.log(`1号坑位=>${value}`)
      } 
      if(mode & 2){
        console.log( `2号坑位=>${value}`)
      }
      if(mode & 4){
        console.log( `3号坑位=>${value}`)
      }
      if(mode & 8){
        console.log( `4号坑位=>${value}`)
      }
    }
    fn('1',0b0001)
    fn('2',0b0010)
    fn('3',0b0100)
    fn('4',0b1000)

*/
// 1 3 5 7


// console.log(0b0001&2)