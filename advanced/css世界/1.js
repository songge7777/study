

function fn(){
  new Promise((resolve,reject)=>{
    console.log('111')
    for(let i=0;i<999;i++){
      if(i>888)resolve()
    }
    console.log(333)
  }).then(()=>{
    console.log('222')
  })
}

fn()