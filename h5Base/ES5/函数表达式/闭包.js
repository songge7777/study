/*
  1、闭包的封装
    (function(){
      var a = 123;
      var exports={};
      exports.fn=()=>{
        return a
      }
      window.exports = exports
    })()
  2、处理内存泄漏
    原:
    function a(){
        var ele = document.getElementById('div')
        ele.onclick = function(){
          alert(ele.id)
        }
    }
    改:
    function a(){
        var ele = document.getElementById('div')
        var id = ele.id 
        ele.onclick = function(){
          alert(id)
        }
        ele = null
    }
*/