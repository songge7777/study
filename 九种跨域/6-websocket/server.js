let express = require('express')
let WebSocket = require('ws')
let wss = new WebSocket.Server({port:3000})
wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        console.log('获取数据',data)
    })
})