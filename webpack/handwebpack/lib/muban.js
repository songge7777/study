(function(modules) { 
  var installedModules = {};

  function __webpack_require__(moduleId) {

    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    module.l = true;

    return module.exports;
  }


  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({

"./src/a.js":

(function(module, exports) {
  eval("console.log('1')\r\n\n\n//# sourceURL=webpack:///./src/a.js?");
}),

"./src/index.js":
(function(module, exports, __webpack_require__) {
  eval("let a = __webpack_require__(/*! ./a */ \"./src/a.js\")\r\nconsole.log('1')\n\n//# sourceURL=webpack:///./src/index.js?");
})

});