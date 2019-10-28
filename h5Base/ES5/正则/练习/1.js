    var str='adb22s22d22hsu222223673njAj2nj2234n45nk';
    let a = str.replace(/(\d+)(\d)/g,(a1,a2,a3,a4,a5)=>{
      console.log('-----------',a1,a2,a3,a4,a5)
      return '--------'
    })
    // a1 为(\d+)(\d)
    // a2 为第一个(\d+)
    // a3 为第二个(\d)
    // a4 为第一个满足的下标
    // a5 原字符串
    // console.log会把满足的条件都打印下来