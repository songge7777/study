
// cnpm i -g pmp2
// pm2 start 1.js
let express = require('express');
let app = express();
app.get('/',(req,res)=>{
  res.send('index')
})
app.listen(4000)