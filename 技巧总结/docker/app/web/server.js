let http = require('http');
let server = http.createServer((req,res)=>{
    res.end('node server')
})
server.listen(3000)