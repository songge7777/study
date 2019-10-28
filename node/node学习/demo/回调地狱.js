
const fs = require('fs')
const promisify = require('util').promisify
const read =promisify( fs.readFile)
// 1
read('./tt.txt').then(data=>{
  console.log(data.toString())
}).catch(err=>{
  console.log(err)
})

// 2
async function test() {
  try{
    const content = await read('./tt.txt')
    console.log(content.toString())
  } catch (err){
    console.log(err)
  }
}

test()