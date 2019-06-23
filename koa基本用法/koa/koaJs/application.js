
let EventEmitter = require('events')
let http = require('http')
class Application extends EventEmitter{
  constructor(){
    super()
  };
  handleRequest(){

  }
  use(){

  }
  listen(...args){
    let server =  http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Application